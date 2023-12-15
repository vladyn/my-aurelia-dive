import {IStore} from '@aurelia/state';
import {IValidationRules} from '@aurelia/validation';
import {newInstanceForScope, resolve} from '@aurelia/kernel';
import {IValidationController} from '@aurelia/validation-html';
import {DialogController} from '@aurelia/dialog';

export class MyDialog {
    static inject = [DialogController, IStore, IValidationRules];
    modalAction = 'Редакция / добавяне на адрес';
    validationController = resolve(newInstanceForScope(IValidationController));

    constructor(dialogController, store, validationRules) {
        this.dialogController = dialogController;
        this.validationRules = validationRules;
        this.store = store;
    }

    activate(model) {
        this.model = model;
        this.validationRules
            .on(this.model)
            .ensure('address')
            .required()
            .minLength(3)
            .maxLength(100)
            .ensure('settlementName')
            .required()
            .minLength(3)
            .maxLength(100)
            .ensure('zipCode')
            .required()
            .minLength(3)
            .maxLength(5);
    }

    cancel() {
        this.dialogController.cancel();
    }

    async accept() {
        const result = await this.validationController.validate();
        console.log('result', result);
        if (!result.valid) {
            return;
        }
        this.store.dispatch({type: 'addAddress', value: this.model});
        this.dialogController.ok({valueFromDialog: this.model});
    }
}
