import {bindable} from 'aurelia';
import {IStore, IState, fromState} from '@aurelia/state';
import {HttpService} from '../services/http-service';
import {ENDPOINTS} from '../constants/endpoints';

export class Sidebar {
    static inject = [HttpService, IStore, IState];
    @bindable selectedUnit;
    @fromState((state) => state.selectedItem)
        selectedItem;
    @fromState((state) => state.itemTreeState)
        itemTreeState;

    constructor(httpService, store, state) {
        this.httpService = httpService;
        this.store = store;
        this.state = state;
    }

    async attached() {
        const result = await this.httpService.getUnits();
        this.store.dispatch({type: 'newItemTree', value: result});
    }


    async clickHandler3() {
        const response = await this.httpService.get(ENDPOINTS.cases);
        const result = await response.json();
        this.store.dispatch({type: 'newCaseTree', value: result});
    }


    selectUnit(unit) {
        this.store.dispatch({type: 'selectedItemTree', value: unit});
        this.selectedUnit = unit;
        return this.selectedItem === unit;
    }

    toggleUnit(level, itemIndex) {
        // eslint-disable-next-line max-len
        this.store.dispatch({type: 'newItemTreeState', value: {[level]: {[itemIndex]: this.itemTreeState[level][itemIndex] === 'open' ? 'closed' : 'open'}}});
    }
}
