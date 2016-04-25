/**
 * Created by idannaim on 23/03/2016.
 */
import {Component} from "angular2/core";
import {pullAt as _pullAt} from "lodash";
import {ServerApi} from "../services/server-api/server-api";

@Component({
  selector: 'profile',
  template: require('./profile.html'),
  styles: [require('!!raw!./profile.css')]
})

export class Profile {

  private profileInfo:any;

  constructor(public serverApi:ServerApi) {
    this.profileInfo = {
      companies: [{}]
    }
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    const url = "profile";
    this.serverApi.get(url, {})
      .map(result=>result.json())
      .subscribe((data)=>this.profileInfo = data);
  }

  addCompany() {
    this.profileInfo.companies.push({});
  }

  removeCompany(index) {
    _pullAt(this.profileInfo.companies, index);
  }

  applyData() {
    const url = "profile";
    debugger;
    this.serverApi.put(url, this.profileInfo, {})
      .map(result=>result.json())
      .subscribe((data)=>console.log(data));
  }

  getCountries() {
    const countriesUrl = "../../assets/countries.json";
    // this.serverApi.get(countriesUrl)
    //   .map(result => result.json())
    //   .subscribe(data => console.log(data));
  }
}
