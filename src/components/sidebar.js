import {HttpService} from '../services/http-service';

export class Sidebar {
  static inject = [HttpService];

  treeItems = [
    {name: 'Home', route: 'home'},
    {name: 'About', route: 'about'},
    {name: 'Contact', route: 'contact'},
  ];

  constructor(httpService) {
    this.httpService = httpService;
    console.log('Sidebar constructor', this.httpService);
  }

  name = 'Sidebar';
}
