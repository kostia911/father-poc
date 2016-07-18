/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import {BurgerMenu} from './shared/burgermenu'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives:[BurgerMenu],
  
  styleUrls: [
    './home/home.style.css'
  ],
  template: `
    <main>
    <burgermenu></burgermenu>
       
      <router-outlet></router-outlet>
    </main>

  `
})
export class App {

  name = 'Igor Mololkin\'art';
  

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
