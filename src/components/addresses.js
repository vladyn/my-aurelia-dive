import {IStore} from '@aurelia/state';
import {HttpService} from '../services/http-service';
import {IDialogService} from '@aurelia/dialog';
import {MyDialog} from './my-dialog';

export class Addresses {
  static inject = [HttpService, IStore, IDialogService];

  constructor(httpService, store, dialogService) {
    this.httpService = httpService;
    this.store = store;
    this.dialogService = dialogService;
  }

  async bound() {
    if (localStorage.getItem('eosState') && JSON.parse(localStorage.getItem('eosState')).addressTree.length >= 2) {
      return;
    }
    const result = await this.httpService.getAddresses();
    this.store.dispatch({type: 'newAddressTree', value: result});
  }

  addAddress() {
    const model = {
      'settlementName': '',
      'zipCode': '',
      'address': '',
    };
    this.showDialog(model);
  }
  editAddress(address) {
    this.showDialog({address});
  }
  deleteAddress(address, index) {
    if (confirm('Сигурни ли сте?')) {
      this.store.dispatch({type: 'deleteAddress', value: {address, index}});
    }
  }
  showDialog(model) {
    this.dialogService
        .open({component: () => MyDialog, model})
        .then((openDialogResult) => {
          console.log('openDialogResult', openDialogResult);
        });
  }
  cancelDialog() {
    this.dialogService.cancel('Dialog was cancelled');
  }
}
