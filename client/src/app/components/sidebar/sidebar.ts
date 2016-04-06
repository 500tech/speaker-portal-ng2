/**
 * Created by idannaim on 10/03/2016.
 */
import {Component}     from 'angular2/core';
import {SIDEBAR_ITEMS} from './constants/sidebar-items';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {UserManagement} from './components/user-management/user-management';

@Component({
  selector: 'sidebar',
  directives: [UserManagement, ...ROUTER_DIRECTIVES],
  template: require('./sidebar.html')
})
export class Sidebar {
  items:Array<any>;

  constructor() {

    this.items = SIDEBAR_ITEMS;
  }
}
