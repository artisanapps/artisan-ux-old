import {makeObservable, observable} from "mobx-6";
import StepManagerBase from "./StepManagerBase.multi-step-modals";

abstract class MultiStepModalManagerBase {
  abstract getSteps: () => Array<StepManagerBase>;
  abstract onClose: (canceled: boolean) => void;

  isOpen: boolean;
  disableActions: boolean;

  constructor() {
    this.reset();

    makeObservable(this, {
      isOpen: observable,
      disableActions: observable,
    })
  }

  reset = () => {
    this.isOpen = false;
    this.disableActions = false;
  }
}

export default MultiStepModalManagerBase;
