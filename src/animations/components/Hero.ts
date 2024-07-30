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
      subElements: {},
    });
  }

  protected customAnimations(): void {}

  protected setupBaseAnimationStage() {
    super.setupBaseAnimationStage();
  }
}
