/**
 * Created by idannaim on 07/04/2016.
 */
import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {ServerApi} from "../../../services/server-api/server-api";

@Component({
  selector: 'calls-table',
  template: require('./calls-table.html'),
  inputs: ['list']
})

export class CallsTable {
  constructor(public router:Router, public serverApi:ServerApi) {

  }

  duplicateItem(item) {
    console.log(item);
  }

  deleteItem(item) {
    const url = "papers";
    debugger;
    console.log(item.id);
    this.serverApi.delete(url, item.id)
      .map(result=>result.json())
      .subscribe((data)=>console.log('deletetd item ', data));

  }

  modify(id) {
    debugger;
    this.router.navigate(['Paper', { id: id }]);
  }
}
