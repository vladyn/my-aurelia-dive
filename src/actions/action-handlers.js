export function keywordsHandler(currentState, action) {
  switch (action.type) {
    case 'newKeywords':
      return {
        ...currentState,
        keywords: action.value,
      };
    case 'clearKeywords':
      return {
        ...currentState,
        keywords: '',
      };
    default:
      return currentState;
  }
}

export function itemTreeHandler(currentState, action) {
  switch (action.type) {
    case 'newItemTree':
      return {
        ...currentState,
        itemTree: action.value,
      };
    case 'newCaseTree':
      return {
        ...currentState,
        caseTree: action.value,
      };
    case 'selectedItemTree':
      return {
        ...currentState,
        selectedItem: action.value,
      };
    default:
      return currentState;
  }
}
