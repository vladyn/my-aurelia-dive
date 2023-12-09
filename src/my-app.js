import {MyDialog} from './components/my-dialog';
import {IDialogService} from '@aurelia/dialog';
import {resolve, newInstanceOf} from '@aurelia/kernel';
import {HttpService} from './services/http-service';

export class MyApp {
  static inject = [IDialogService, HttpService];
  message = 'Hello World!';
  dialog = resolve(newInstanceOf(MyDialog));

  constructor(dialogService, httpService) {
    this.message = 'Hello World!';
    this.dialogService = dialogService;
    this.httpService = httpService;
  }

  async activate(params) {
    this.valueFromDialog = params.valueFromDialog;
    this.dialogService
        .open({component: () => MyDialog, model: this.person})
        .then((openDialogResult) => {
          // Note:
          // We get here when the dialog is opened,
          // and we are able to close dialog
          setTimeout(() => {
            openDialogResult.dialog.cancel('Failed to finish editing after 3 seconds');
          }, 3000);
        });
  }

  clickHandler() {
    this.message = 'Hello Aurelia!';
  }

  clickHandler2() {
    alert('Hello Aurelia!');
  }

  async clickHandler3() {
    const response = await this.httpService.get('http://localhost:3004/cases');
    console.log('response', response);
  }

  showDialog() {
    this.dialogService
        .open({component: () => MyDialog, model: this.person})
        .then((openDialogResult) => {
          // Note:
          // We get here when the dialog is opened,
          // and we are able to close dialog
          setTimeout(() => {
            openDialogResult.dialog.cancel('Failed to finish editing after 3 seconds');
          }, 3000);
        });
  }
}
