import Aurelia from 'aurelia';
import {DialogDefaultConfiguration} from '@aurelia/dialog';
import {RouterConfiguration} from '@aurelia/router';
import {StateDefaultConfiguration} from '@aurelia/state';
import {ValidationHtmlConfiguration} from '@aurelia/validation-html';
import {initialState} from './constants/initialstate';
import {itemTreeHandler} from './actions/action-handlers';
import {persistentStatePlugin} from './lib/persistent-state';
import {MyApp} from './components/my-app';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

Aurelia
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
    .app(MyApp)
    .start();
