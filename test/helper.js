import Aurelia, {CustomElement} from 'aurelia';
import {DialogDefaultConfiguration} from '@aurelia/dialog';
import {RouterConfiguration} from '@aurelia/router';
import {StateDefaultConfiguration} from '@aurelia/state';
import {ValidationHtmlConfiguration} from '@aurelia/validation-html';
import {itemTreeHandler} from '../src/actions/action-handlers';
import {persistentStatePlugin} from '../src/lib/persistent-state';
import {initialState} from '../src/constants/initialstate';
export async function render(template, ...deps) {
    const wrapper = CustomElement.define({name: 'wrapper', template});
    const div = document.createElement('div');
    const au = Aurelia
        .register(deps)
        .register(
            RouterConfiguration.customize({
                useUrlFragmentHash: false,
            }))
        .register(DialogDefaultConfiguration)
        .register(ValidationHtmlConfiguration)
        .register(StateDefaultConfiguration.init(
            JSON.parse(localStorage.getItem('eosState')) || initialState,
            itemTreeHandler,
        ),
        persistentStatePlugin('eosState'),
        )
        .app({
            host: div,
            component: wrapper,
        });
    await au.start();
    return div;
}
