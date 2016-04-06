import {Injectable} from "angular2/core";

export const SIDEBAR_ITEMS = [
  {
    name: 'Home',
    icon: 'home',
    state: ["/Home"]
  },
  {
    name: 'Profile',
    icon: 'perm_identity',
    state: ["/Profile"]
  },
  {
    name: 'Papers list',
    icon: 'reorder',
    state: ["/PapersList"]
  },
  {
    name: 'Updates',
    icon: 'flag',
    state:["/Profile"]
  }

];
