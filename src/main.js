import Aurelia from 'aurelia';
import {DialogDefaultConfiguration} from '@aurelia/dialog';
import {RouterConfiguration} from '@aurelia/router';
import {MyApp} from './my-app';

Aurelia
    .register(
        RouterConfiguration.customize({
          useUrlFragmentHash: false,
        }))
    .register(DialogDefaultConfiguration)
    .app(MyApp)
    .start();
