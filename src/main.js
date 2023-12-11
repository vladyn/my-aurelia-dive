import Aurelia from 'aurelia';
import {DialogDefaultConfiguration} from '@aurelia/dialog';
import {RouterConfiguration} from '@aurelia/router';
import {StateDefaultConfiguration} from '@aurelia/state';
import {initialState} from './constants/initialstate';
import {keywordsHandler, itemTreeHandler} from './actions/action-handlers';
import {MyApp} from './my-app';

Aurelia
    .register(
        RouterConfiguration.customize({
          useUrlFragmentHash: false,
        }))
    .register(DialogDefaultConfiguration)
    .register(StateDefaultConfiguration.init(
        initialState,
        keywordsHandler,
        itemTreeHandler,
    ))
    .app(MyApp)
    .start();
