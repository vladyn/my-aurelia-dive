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

  describe('keywordsHandler', () => {
    it('should return the current state when the action type is not recognized', () => {
      const currentState = {foo: 'bar'};
      const action = {type: 'unknown'};
      expect(keywordsHandler(currentState, action)).toEqual(currentState);
    });
    it('should return a new state with the keywords property updated', () => {
      const currentState = {keywords: 'foo'};
      const action = {type: 'newKeywords', value: 'bar'};
      expect(keywordsHandler(currentState, action)).toEqual({keywords: 'bar'});
    });
    it('should return a new state with the keywords property cleared', () => {
      const currentState = {keywords: 'foo'};
      const action = {type: 'clearKeywords'};
      expect(keywordsHandler(currentState, action)).toEqual({keywords: ''});
    });
  });
});
