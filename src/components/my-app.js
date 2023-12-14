import {MyDialog} from './my-dialog';
import {Cases} from './cases';
import {Addresses} from './addresses';
import {Home} from './home';
import {fromState} from '@aurelia/state';
import {IDialogService} from '@aurelia/dialog';
import {resolve, newInstanceOf} from '@aurelia/kernel';

export class MyApp {
  static inject = [IDialogService];
  static routes = [
    {
      path: '',
      component: Home,
      title: 'Home',
    },
    {
      path: 'addresses',
      component: Addresses,
      title: 'Addresses',
    },
    {
      path: 'addresses/:addressId',
      component: Addresses,
      title: 'Address details',
    },
    {
      path: 'cases',
      component: Cases,
      title: 'Cases',
    },
    {
      path: 'cases/:caseId',
      component: Cases,
      title: 'Case Details',
    },
  ];
  message = 'Hello World!';
  dialog = resolve(newInstanceOf(MyDialog));
  @fromState((state) => state.keywords)
    keywords;

  constructor(dialogService) {
    this.message = 'Hello World!';
    this.dialogService = dialogService;
  }

  clickHandler() {
    this.message = 'Hello Aurelia!';
  }
  showDialog() {
    this.dialogService
        .open({component: () => MyDialog, model: {}})
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
