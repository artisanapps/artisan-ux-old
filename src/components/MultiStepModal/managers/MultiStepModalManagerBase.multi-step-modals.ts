import {action, computed, makeObservable, observable} from "mobx-6";
import StepManagerBase from "./StepManagerBase.multi-step-modals";

abstract class MultiStepModalManagerBase {
  abstract getSteps: () => Array<StepManagerBase>;
  abstract onClose: (canceled: boolean) => void;

  private _isOpen: boolean;
  disableActions: boolean;

  constructor() {
    this.reset();

    makeObservable<MultiStepModalManagerBase, "isOpen" | "setIsOpen">(this, {
      isOpen: observable,
      setIsOpen: action,
      getIsOpen: computed,
      disableActions: observable,
    })
  }

  reset = () => {
    this.setIsOpen(false);
    this.disableActions = false;
  }

  getIsOpen = (): boolean => {
    return this._isOpen;
  }

  private setIsOpen = (isOpen: boolean) => {
    this._isOpen = isOpen;
  }

  open = () => {
    this.setIsOpen(true);
  }

  close = () => {
    this.reset();
  }
}

export default MultiStepModalManagerBase;
