import {IStore} from '@aurelia/state';
import {DialogController} from '@aurelia/dialog';

export class MyDialog {
  static inject = [DialogController, IStore];
  modalAction = 'Редакция / добавяне на адрес';

  constructor(dialogController, store) {
    this.dialogController = dialogController;
    this.store = store;
  }
  activate(model) {
    this.model = model;
  }

  cancel() {
    this.dialogController.cancel();
  }

  accept() {
    this.store.dispatch({type: 'addAddress', value: this.model?.address});
    return this.dialogController.ok({valueFromDialog: this.model});
  }
}
