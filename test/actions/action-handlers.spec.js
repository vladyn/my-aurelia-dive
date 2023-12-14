import {itemTreeHandler} from '../../src/actions/action-handlers';
import {keywordsHandler} from '../../src/actions/action-handlers';

describe('Actiopn handlers', () => {
  describe('itemTreeHandler', () => {
    it('should return the current state when the action type is not recognized', () => {
      const currentState = {foo: 'bar'};
      const action = {type: 'unknown'};
      expect(itemTreeHandler(currentState, action)).toEqual(currentState);
    });
    it('should return a new state with the itemTree property updated', () => {
      const currentState = {itemTree: 'foo'};
      const action = {type: 'newItemTree', value: 'bar'};
      expect(itemTreeHandler(currentState, action)).toEqual({itemTree: 'bar'});
    });
    it('should return a new state with the caseTree property updated', () => {
      const currentState = {caseTree: 'foo'};
      const action = {type: 'newCaseTree', value: 'bar'};
      expect(itemTreeHandler(currentState, action)).toEqual({caseTree: 'bar'});
    });
    it('should return a new state with the selectedItem property updated', () => {
      const currentState = {selectedItem: 'foo'};
      const action = {type: 'selectedItemTree', value: 'bar'};
      expect(itemTreeHandler(currentState, action)).toEqual({selectedItem: 'bar'});
    });
  });
});
