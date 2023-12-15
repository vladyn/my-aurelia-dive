import {AppTask} from 'aurelia';
import {IStore} from '@aurelia/state';

export function persistentStatePlugin(key) {
    return AppTask.creating(IStore, (store) => {
        store.subscribe({
            handleStateChange: (newState) => localStorage.setItem(key, JSON.stringify(newState)),
        });
    });
}


