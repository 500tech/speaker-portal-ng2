/**
 * Created by idannaim on 06/04/2016.
 */
import {Component, OnInit} from "angular2/core";
import {ServerApi} from "../services/server-api/server-api";
import {CallsTable} from "./components/calls-table/calls-table";


@Component({
  selector: 'papers-list',
  template: require('./papers-list.html'),
  directives: [CallsTable],
  styles: [require('!raw!sass!./papers-list.scss')]
})

export class PapersList implements OnInit {
  public papersCall:any[];
  public myPapersList:any[];

  constructor(public serverApi:ServerApi) {}

  ngOnInit():any {
    this.getOpenCalls();
    this.getPapersList();
  }

  getPapersList() {
    const url = 'papers';
    this.serverApi.get(url, {})
      .map(result => result.json())
      .subscribe(data => {
          console.log(data);
          this.myPapersList = data
        }
      )
  }

  modify(id) {
  }


  getOpenCalls() {
    const url = 'open_calls';
    this.serverApi.get(url, {})
      .map(result => result.json())
      .subscribe(data => this.papersCall = data)

  }
}
