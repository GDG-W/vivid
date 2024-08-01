import AnimationBase from '@/animations/classes/AnimationBase';

import CustomEase from '@/animations/utils/CustomEase';

const easings = {
  ABOUT_SCALE: CustomEase.create('navigation_header', 'M0,0 C0.59,0 0,1 1,1'),
};

export default class TargetAudienceAnimation extends AnimationBase {
  constructor(sourceElementClassName: string) {
    super({
      sourceElement: `.${sourceElementClassName}`,
      subElements: {},
      easings,
    });

    this.init();
  }
}
