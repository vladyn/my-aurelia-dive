import {IStore} from '@aurelia/state';
import {HttpService} from '../services/http-service';

export class Cases {
    static inject = [HttpService, IStore];
    title;

    constructor(httpService, store) {
        this.httpService = httpService;
        this.store = store;
    }

    async canLoad(parameters, next) {
        console.log('canLoad', parameters, next);
        this.title = parameters?.caseId;
        return true;
    }

    async bound() {
        const result = await this.httpService.getCases();
        this.store.dispatch({type: 'newCaseTree', value: result});
    }
}
