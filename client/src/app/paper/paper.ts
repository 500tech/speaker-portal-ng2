/**
 * Created by idannaim on 07/04/2016.
 */
import {Component} from "angular2/core";
import {ServerApi} from "../services/server-api/server-api";
import {RouteParams, Router} from "angular2/router";
import {pullAt as _pullAt} from "lodash";


@Component({
  selector: 'paper',
  template: require('./paper.html')
})

export class Paper {
  public paper:any = {};
  public levels:any[];
  public sessionTypes:any[];
  private paperId:String;

  constructor(public serverApi:ServerApi, params:RouteParams, public router:Router) {
    this.paperId = params.get('id');
    console.log("this.paperId", this.paperId);
    this.paper = {
      coSpeaker: [{}]
    }
  }

  ngOnInit() {
    this.getLevels();
    this.getSessionType();
    if (this.paperId) {
      this.getPaper();
    }
  }

  getPaper() {
    const url = "papers";
    this.serverApi.get(url, { id: this.paperId })
      .map(result=>result.json())
      .subscribe((data)=> {
        console.log('data', data[0]);
        this.paper = data[0]
      });

  }

  getLevels() {
    const url = "level";
    this.serverApi.get(url, {})
      .map(result=>result.json())
      .subscribe((data)=>this.levels = data);

  }

  getSessionType() {
    const url = "session_type";
    this.serverApi.get(url, {})
      .map(result=>result.json())
      .subscribe((data)=>this.sessionTypes = data);

  }

  addCoSpeaker() {
    this.paper.coSpeaker.push({});
  }

  removeCoSpeaker(index) {
    _pullAt(this.paper.coSpeaker, index);
  }

  applyData() {
    this.defaultFields();
    const url = "papers";
    this.serverApi.post(url, this.paper, {})
      .map(result=>result.json())
      .subscribe((data)=> {
        console.log(data);
        this.router.navigate(['PapersList']);
      });
  }

  defaultFields() {
    this.paper.modify = true;
    this.paper.duplicate = true;
    this.paper.delete = true;
  }
}
