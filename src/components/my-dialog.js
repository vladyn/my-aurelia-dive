import {DialogController} from '@aurelia/dialog';

export class MyDialog {
  static inject = [DialogController];
  valueFromDialog = '';

  constructor(dialogController) {
    this.dialogController = dialogController;
  }

  cancel() {
    this.dialogController.cancel();
  }

  accept() {
    this.dialogController.ok({valueFromDialog: this.valueFromDialog});
  }
}
