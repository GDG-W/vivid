import Component from '@/animations/classes/Component';
import GSAPAnimations from '@/animations/classes/Gsap';
import '@/animations/styles/animation.scss';
import { EasingFunction } from '@/animations/types/gsap';
import getEasingFunction from '@/animations/utils/getEasing';
import { calculateSentences, formatAndSplitText } from '@/animations/utils/text';

type Easings = Record<string, EasingFunction | Record<string, EasingFunction>>;

type AnimationBaseInputs = {
  sourceElement: string | HTMLElement;
  subElements?: { [key: string]: string | HTMLElement | NodeList };
  easings: Easings;
};

/**
 * Abstract base class for animations.
 * @extends {Component}
 */

export default abstract class AnimationBase extends Component {
  private readonly easings: Easings = {};

  constructor(
    input: AnimationBaseInputs,
    protected readonly animationLibrary: GSAPAnimations = new GSAPAnimations(),
  ) {
    super({
      element: input.sourceElement,
      elements: {
        animateFadeIn: '[data-animate-fadein]',
        animateScale: '[data-animate-scale]',
        animateYUp: '[data-animate-y-up]',
        animateText: '[data-animate-text]',
        animateSentences: '[data-animate-sentences]',
        ...input.subElements,
      },
    });

    this.easings = input.easings;

    const observer = this.trackWithObserver();

    if (this.element) {
      observer.observe(this.element);
    }
  }

  /**
   * Abstract method for custom animations.
   * This should be implemented by subclasses.
   * @abstract
   */
  protected abstract customAnimations(): void;

  triggerAnimation(observer?: IntersectionObserver) {
    this.setupBaseAnimationStage();
    this.triggerBaseAnimations();
    this.customAnimations();

    if (observer && this.element) {
      observer.unobserve(this.element);
    }
  }

  /**
   * Sets up an IntersectionObserver to track element visibility.
   * @returns {IntersectionObserver} The intersection observer instance.
   */
  trackWithObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.some((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;

            // Check if 30% of the section's height is less than the screen's height
            const isShorterThanScreen = section.clientHeight * 0.3 <= window.innerHeight;

            if (isShorterThanScreen && entry.intersectionRatio >= 0.2) {
              this.triggerAnimation(observer);
            } else if (!isShorterThanScreen && entry.intersectionRatio >= 0.1) {
              this.triggerAnimation(observer);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.2],
      },
    );

    return observer;
  }

  triggerBaseAnimations() {
    const { animateScale, animateFadeIn, animateYUp, animateText, animateSentences } =
      this.elements;

    if (animateScale) {
      const elements = this.normalizeToElements(animateScale);

      elements.forEach((element) => {
        this.animateScale(element as HTMLElement);
      });
    }

    if (animateFadeIn) {
      const elements = this.normalizeToElements(animateFadeIn);

      elements.forEach((element) => {
        this.animateFadeIn(element);
      });
    }

    if (animateYUp) {
      const elements = this.normalizeToElements(animateYUp);

      elements.forEach((element) => {
        this.animateYUp(element);
      });
    }

    if (animateText) {
      const elements = this.normalizeToElements(animateText);

      elements.forEach((element) => {
        this.animateText(element);
      });
    }

    if (animateSentences) {
      const elements = this.normalizeToElements(animateSentences);

      elements.forEach((element) => {
        this.animateSentences(element);
      });
    }
  }

  protected setupBaseAnimationStage() {
    const { animateYUp, animateText, animateSentences } = this.elements;

    if (animateYUp) {
      const elements = this.normalizeToElements(animateYUp);

      elements.forEach((element) => {
        const wrapper = document.createElement('span');

        // Get computed styles for margin and padding
        const computedStyle = window.getComputedStyle(element);
        const margin = `${computedStyle.marginTop} ${computedStyle.marginRight} ${computedStyle.marginBottom} ${computedStyle.marginLeft}`;
        const padding = `${computedStyle.paddingTop} ${computedStyle.paddingRight} ${computedStyle.paddingBottom} ${computedStyle.paddingLeft}`;

        // Apply margin and padding to the wrapper
        wrapper.style.display = 'flex';
        wrapper.style.overflow = 'hidden';
        wrapper.style.height = `${element.offsetHeight}px`;
        wrapper.style.margin = margin;
        wrapper.style.padding = padding;

        // Remove margin and padding from the element
        element.style.margin = '0';
        element.style.padding = '0';
        element.style.visibility = 'visible';

        if (element.parentNode) {
          element.parentNode.insertBefore(wrapper, element);
        }

        wrapper.appendChild(element);

        this.animationLibrary.core.set(element, {
          yPercent: 100,
        });
      });
    }

    if (animateText) {
      const elements = this.normalizeToElements(animateText);

      elements.forEach((element) => {
        formatAndSplitText(element);

        formatAndSplitText(element);

        this.animationLibrary.core.set(element.querySelectorAll('span span'), {
          yPercent: 100,
        });
      });
    }

    if (animateSentences) {
      const elements = this.normalizeToElements(animateSentences);

      elements.forEach((element) => {
        formatAndSplitText(element);

        formatAndSplitText(element);

        this.animationLibrary.core.set(element.querySelectorAll('span span'), {
          yPercent: 100,
        });
      });
    }
  }

  // Animate Methods
  animateFadeIn(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    this.animationLibrary.animateFadeIn({
      delay,
      duration,
      element,
      ease: easing,
    });
  }

  animateScale(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    this.animationLibrary.animateScale({
      delay,
      duration,
      element,
      ease: easing,
    });
  }

  animateYUp(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    this.animationLibrary.animateYUp({
      delay,
      duration,
      element,
      ease: easing,
    });
  }

  animateText(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    const words = element.querySelectorAll('span');
    const stagger = Number(element.dataset.stagger) || 0.084;

    element.style.opacity = '1';

    words.forEach((sentence, index) => {
      this.animationLibrary.animateYUp({
        element: sentence,
        duration,
        ease: easing,
        delay: delay + stagger * index,
      });
    });
  }

  animateSentences(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    const words = calculateSentences(element.querySelectorAll('span span'));
    const stagger = Number(element.dataset.stagger) || 0.084;

    element.style.opacity = '1';

    words.forEach((sentence, index) => {
      this.animationLibrary.animateYUp({
        element: sentence,
        duration,
        ease: easing,
        delay: delay + stagger * index,
      });
    });
  }

  getAnimationValues(element: HTMLElement) {
    const delay = Number(element.dataset.delay) || 0;

    const duration = Number(element.dataset.duration) || 1;

    const datasetEasing = element.dataset.easing as keyof typeof this.easings;

    let easing: EasingFunction = this.easings?.DEFAULT as EasingFunction;

    if (datasetEasing) {
      easing =
        (getEasingFunction(datasetEasing, this.easings) as EasingFunction) || this.easings?.DEFAULT;
    }

    return {
      delay,
      easing,
      duration,
    };
  }

  normalizeToElements(input: HTMLElement | Element | NodeList | string[]): HTMLElement[] {
    if (input instanceof NodeList) {
      return Array.from(input) as HTMLElement[];
    }

    return [input] as HTMLElement[];
  }
}
