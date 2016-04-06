/**
 * Created by idannaim on 23/03/2016.
 */
import {Component} from "angular2/core";
import { pullAt as _pullAt } from "lodash";

@Component({
  selector: 'profile',
  template: require('./profile.html'),
  styles: [require('!!raw!./profile.css')]
})

export class Profile {

  private profileInfo:any;

  constructor() {
    this.profileInfo = {
      companies: [{}]
    }
  }

  addCompany() {
    this.profileInfo.companies.push({});
  }

  removeCompany(index) {

    _pullAt(this.profileInfo.companies, index);
  }

  applyData() {
    console.log(this.profileInfo);
  }
}
