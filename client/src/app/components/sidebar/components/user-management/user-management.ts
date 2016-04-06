/**
 * Created by idannaim on 13/03/2016.
 */
import {Component} from 'angular2/core';
const style=require('!!raw!../../sidebar.css');

@Component({
  selector: 'user-management',
  template: require('./user-management.html'),
  styles: [style]
})

export class UserManagement {
}
