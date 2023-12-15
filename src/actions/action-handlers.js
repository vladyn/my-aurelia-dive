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
    case 'newAddressTree':
        return {
            ...currentState,
            addressTree: action.value,
        };
    case 'addAddress':
        return {
            ...currentState,
            addressTree: [...new Set([...currentState.addressTree, action.value])],
        };
    case 'deleteAddress':
        return {
            ...currentState,
            addressTree: currentState.addressTree.filter((_, i) => i !== action.value?.index),
        };
    default:
        return currentState;
    }
}
