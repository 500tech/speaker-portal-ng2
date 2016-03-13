/*
 * Angular 2 decorators and services
 */
import 'material-design-lite';
import 'material-design-lite/material.css';
import {Component}                                  from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,RouterOutlet} from 'angular2/router';
import {FORM_PROVIDERS}                             from 'angular2/common';
import {RouterActive}                               from './directives/router-active';
import {Home}                                       from './home/home';
import {Sidebar}                                    from './components/sidebar/sidebar.ts';
import {TopHeader}                                  from "./components/top-header/top-header";

@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['Home'] },
  { path: '/home', name: 'Home', component: Home },

])

@Component({
  selector: 'app',
  directives: [Sidebar, TopHeader, RouterOutlet],
  template: `
    <div style="min-height: 670px"
     class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <top-header class="demo-header mdl-layout__header"></top-header>
    <sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"></sidebar>
  <main class="mdl-layout__content mdl-color--grey-100">
        <div class="mdl-grid demo-content">
    <router-outlet></router-outlet>
    </div>
    </main>
    </div>
    `
})

export class App {
}
