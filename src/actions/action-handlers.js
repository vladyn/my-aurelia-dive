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
  return action.type === 'newItemTree' ?
      {...currentState, itemTree: action.value} :
      currentState;
}
