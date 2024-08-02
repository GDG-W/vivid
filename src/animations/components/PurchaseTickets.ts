import AnimationBase from '@/animations/classes/AnimationBase';

export default class PurchaseTicketsAnimation extends AnimationBase {
  constructor(sourceElementClassName: string) {
    super({
      sourceElement: `.${sourceElementClassName}`,
      subElements: {},
    });

    this.init();
  }
}
