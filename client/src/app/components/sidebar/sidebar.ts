/**
 * Created by idannaim on 10/03/2016.
 */
import {Component}     from 'angular2/core';
import {SIDEBAR_ITEMS} from './constants/sidebar-items';
import {UserManagement} from './components/user-management/user-management';

@Component({
  selector: 'sidebar',
  directives: [UserManagement],
  template: require('./sidebar.html'),
  styles: [require('./sidebar.css')],
})
export class Sidebar {
  items:Array<any>;

  constructor() {

    this.items = SIDEBAR_ITEMS;
  }
}
