import {MyDialog} from './my-dialog';
import {IState, fromState} from '@aurelia/state';
import {IDialogService} from '@aurelia/dialog';
import {resolve, newInstanceOf} from '@aurelia/kernel';
import {HttpService} from '../services/http-service';
import {ENDPOINTS} from '../constants/endpoints';

export class MyApp {
  static inject = [IDialogService, HttpService, IState];
  message = 'Hello World!';
  dialog = resolve(newInstanceOf(MyDialog));
  @fromState((state) => state.keywords)
    keywords;

  constructor(dialogService, httpService, state) {
    this.message = 'Hello World!';
    this.dialogService = dialogService;
    this.httpService = httpService;
    this.state = state;
  }

  clickHandler() {
    this.message = 'Hello Aurelia!';
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
