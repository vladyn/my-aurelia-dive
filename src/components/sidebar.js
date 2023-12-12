import {IStore, IState} from '@aurelia/state';
import {HttpService} from '../services/http-service';

export class Sidebar {
  static inject = [HttpService, IStore, IState];
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

  selectUnit(unit) {
    this.selectedUnit = unit;
    console.log('selectedUnit', this.selectedUnit);
    console.log('state', this.state);
  }

  toggleUnit(level, itemIndex) {
    this.treeState[level].item[itemIndex].expanded = !this.treeState[level].item[itemIndex].expanded;
    console.log(itemIndex);
  }
}
