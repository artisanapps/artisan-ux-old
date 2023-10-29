import {makeObservable, observable} from "mobx-6";

abstract class StepManagerBase {
  abstract id: number;
  abstract disableActions: boolean;
  abstract onStart: () => void;
  abstract onSubmit: () => Promise<boolean>;

  canContinue: boolean;

  constructor() {
    this.canContinue = false;

    makeObservable(this, {
      canContinue: observable
    })
  }

  getStepperContentListItems = () => {
    return [];
  }
}

export default StepManagerBase;