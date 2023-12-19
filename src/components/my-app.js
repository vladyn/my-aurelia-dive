import {Cases} from './cases';
import {Addresses} from './addresses';
import {Home} from './home';

export class MyApp {
    static routes = [
        {
            path: '',
            component: Home,
            title: 'Home',
        },
        {
            path: 'addresses',
            component: Addresses,
            title: 'Addresses',
        },
        {
            path: 'addresses/:addressId',
            component: Addresses,
            title: 'Address details',
        },
        {
            path: 'cases',
            component: Cases,
            title: 'Cases',
        },
        {
            path: 'cases/:caseId',
            component: Cases,
            title: 'Case Details',
        },
    ];
}
