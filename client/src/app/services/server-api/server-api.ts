/**
 * Created by idannaim on 06/04/2016.
 */
import {Injectable} from "angular2/core";
import {Http, Headers, URLSearchParams} from "angular2/http";
import {defaults as _defaults, forEach as _forEach} from "lodash";

@Injectable()
export class ServerApi {

  private http:Http;
  headers:Headers = new Headers();
  private baseURL:String = 'http://localhost:3000/';
  private config:any;


  constructor(http:Http) {
    this.http = http;
    this.headers.append('Content-Type', 'application/json');
    this.config = {
      headers: this.headers
    }
  }

  get(url, params) {
    let _params = new URLSearchParams();
    _forEach(params, (value, key) => {
      _params.set(key, value);
    });
    return this.http.get(this.baseURL + url, { search: _params });
  }

  post(url, params, config) {
    return this.http.post(this.baseURL + url, JSON.stringify(params), _defaults(this.config, config));
  }

  put(url, params, config) {
    return this.http.put(this.baseURL + url, JSON.stringify(params), _defaults(this.config, config));
  }

  delete(url, id) {
    return this.http.delete(this.baseURL + url +"/"+ id);
  }
}
