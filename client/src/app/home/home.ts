import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';


@Component({
  pipes: [ ],
  styles: [ require('!!raw!./home.css') ],
  template: require('./home.html')
})
export class Home {
  data = { value: '' };

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

}
