/**
 * Created by idannaim on 06/04/2016.
 */
import {Component} from "angular2/core";


@Component({
  template: require('./papers-list.html'),
  styles: [require('!raw!sass!./papers-list.scss')]
})

export class PapersList {
  constructor() {
  }
}
