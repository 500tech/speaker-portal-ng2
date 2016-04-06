/*
 * Angular 2 decorators and services
 */
import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet} from "angular2/router";
import {Home} from "./home/home";
import {Sidebar} from "./components/sidebar/sidebar.ts";
import {TopHeader} from "./components/top-header/top-header";
import {Profile} from "./profile/profile";
import {PapersList} from "./papers-list/papers-list";
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
])

@Component({
  selector: 'app',
  directives: [Sidebar, TopHeader, RouterOutlet, Profile],
  template: `<div style="min-height: 670px"
     class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <top-header class="demo-header mdl-layout__header"></top-header>
    <sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900
                    mdl-color-text--blue-grey-50">
    </sidebar>
      <main class="container">
          <router-outlet></router-outlet>
     </main>
    </div>
    `
})

export class App {
}
