import AnimationBase from '@/animations/classes/AnimationBase';
import CustomEase from '@/animations/utils/CustomEase';

const easings = {
  DEFAULT: CustomEase.create('default_custom', 'M0,0 C0.20,0 0,1 1,1'),

  NAVIGATION: {
    header: CustomEase.create('navigation_header', 'M0,0 C0.56,0 0,1 1,1'),
    button: CustomEase.create('navigation_button', 'M0,0 C0.43,0 0,1 1,1'),
  },

  CTA: {
    text: CustomEase.create('custom', 'M0,0 C0.22,0 0,1 1,1'),
    button: CustomEase.create('custom', 'M0,0 C0.59,0 0,1 1,1'),
    header: CustomEase.create('custom', 'M0,0 C0.15,0 0,1 1,1'),
  },

  CAREERCURSORS: {
    productManagerPosition: CustomEase.create('custom', 'M0,0 C0.15,0 0,1 1,1'),
    productDesignerPosition: CustomEase.create('custom', 'M0,0 C0.26,0 0,1 1,1'),
    softwareEnginnerPosition: CustomEase.create('custom', 'M0,0 C0.23,0 0,1 1,1'),
    dataAnalystPosition: CustomEase.create('custom', 'M0,0 C0.23,0 0,1 1,1'),

    arrowRotation: CustomEase.create('custom', 'M0,0 C0.33,0 0.67,1 1,1'),
  },

  TICKETS: {
    ticketOnePosition: CustomEase.create('custom', 'M0,0 C0,0 0,1 1,1'),
    ticketOneRotation: CustomEase.create('custom', 'M0,0 C0.46,0 0,1 1,1'),

    ticketTwoPosition: CustomEase.create('custom', 'M0,0 C0,0 0,1 1,1'),

    ticketThreePosition: CustomEase.create('custom', 'M0,0 C0,0 0,1 1,1'),
    ticketThreeRotation: CustomEase.create('custom', 'M0,0 C0.41,0 0,1 1,1'),
  },
};

export default class HeroAnimation extends AnimationBase {
  constructor(sourceElementClassName: string) {
    super({
      easings,
      sourceElement: `.${sourceElementClassName}`,
      subElements: {
        animateFadeInLeft: '[data-animate-fadein-left]',
        animateFadeInRight: '[data-animate-fadein-right]',
        animateCareerCursor: '[data-animate-career-cursor]',
        animateTicketOne: '[data-animate-ticket-one]',
        animateTicketMiddle: '[data-animate-ticket-middle]',
        animateTicketTwo: '[data-animate-ticket-two]',
      },
    });
  }

  protected customAnimations(): void {
    const {
      animateFadeInLeft,
      animateFadeInRight,
      animateCareerCursor,
      animateTicketOne,
      animateTicketMiddle,
      animateTicketTwo,
    } = this.elements;

    if (animateFadeInLeft) {
      const elements = this.normalizeToElements(animateFadeInLeft);

      elements.forEach((element) => {
        const { delay, duration, easing } = this.getAnimationValues(element);

        this.animationLibrary.core.to(element, {
          transform: 'translateX(0)',
          opacity: 1,
          duration,
          delay,
          ease: easing,
        });
      });
    }

    if (animateFadeInRight) {
      const elements = this.normalizeToElements(animateFadeInRight);

      elements.forEach((element) => {
        const { delay, duration, easing } = this.getAnimationValues(element);

        this.animationLibrary.core.to(element, {
          transform: 'translateX(0)',
          opacity: 1,
          duration,
          delay,
          ease: easing,
        });
      });
    }

    if (animateCareerCursor) {
      const elements = this.normalizeToElements(animateCareerCursor);

      elements.forEach((element) => {
        const { delay, duration } = this.getAnimationValues(element);

        this.animationLibrary.core.to(element, {
          rotate: '0deg',
          duration,
          delay,
          ease: easings.CAREERCURSORS.arrowRotation,
        });
      });
    }

    if (animateTicketOne) {
      const elements = this.normalizeToElements(animateTicketOne);

      elements.forEach((element) => {
        this.animationLibrary.core.to(element, {
          bottom: '-45%',
          duration: 1,
          delay: 0.4,
          ease: easings.TICKETS.ticketOnePosition,
        });

        this.animationLibrary.core.to(element, {
          bottom: '-50%',
          duration: 1,
          delay: 1,
        });

        this.animationLibrary.core.to(element, {
          right: '45%',
          rotate: '60deg',
          duration: 1,
          delay: 0.667,
          ease: easings.TICKETS.ticketOneRotation,
        });
      });
    }

    if (animateTicketMiddle) {
      const elements = this.normalizeToElements(animateTicketMiddle);

      elements.forEach((element) => {
        this.animationLibrary.core.to(element, {
          bottom: '-45%',
          duration: 1,
          delay: 0.18,
          ease: easings.TICKETS.ticketTwoPosition,
        });
      });
    }

    if (animateTicketTwo) {
      const elements = this.normalizeToElements(animateTicketTwo);

      elements.forEach((element) => {
        this.animationLibrary.core.to(element, {
          bottom: '-45%',
          duration: 1,
          delay: 0.3,
          ease: easings.TICKETS.ticketThreePosition,
        });

        this.animationLibrary.core.to(element, {
          bottom: '-50%',
          duration: 1,
          delay: 1,
        });

        this.animationLibrary.core.to(element, {
          left: '45%',
          rotate: '120deg',
          duration: 1,
          delay: 0.667,
          ease: easings.TICKETS.ticketThreeRotation,
        });
      });
    }
  }
}
