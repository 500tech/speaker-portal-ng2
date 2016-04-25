/*
 * Angular 2 decorators and services
 */
import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet, ROUTER_PROVIDERS,RouteParams} from "angular2/router";
import {Home} from "./home/home";
import {Sidebar} from "./components/sidebar/sidebar.ts";
import {TopHeader} from "./components/top-header/top-header";
import {Profile} from "./profile/profile";
import {PapersList} from "./papers-list/papers-list";
import {Paper} from "./paper/paper";
import {ServerApi} from "./services/server-api/server-api";
import "material-design-lite";
import "material-design-lite/material.css";
import "jquery";
import "lodash";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/common.scss";

@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['Home'] },
  { path: '/home', name: 'Home', component: Home },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/papers-list', name: 'PapersList', component: PapersList },
  { path: '/paper/:id', name: 'Paper', component: Paper },
  { path: '/paper', name: 'Paper', component: Paper },
])

@Component({
  selector: 'app',
  directives: [Sidebar, TopHeader, RouterOutlet, Profile],
  providers: [ServerApi, ROUTER_PROVIDERS],
  template: require('./app.html')
})

export class App {
}
