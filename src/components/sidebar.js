import {bindable} from 'aurelia';
import {IStore, IState, fromState} from '@aurelia/state';
import {HttpService} from '../services/http-service';
import {ENDPOINTS} from '../constants/endpoints';

export class Sidebar {
  static inject = [HttpService, IStore, IState];
  @bindable selectedUnit;
  @fromState((state) => state.selectedItem)
    selectedItem;
  treeState = {
    level0: {
      item: [{expanded: true}, {expanded: true}, {expanded: true}],
    },
    level1: {
      item: [{expanded: true}, {expanded: true}, {expanded: true}],
    },
  };

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
    this.treeState[level].item[itemIndex].expanded = !this.treeState[level].item[itemIndex].expanded;
    console.log(itemIndex);
  }
}
