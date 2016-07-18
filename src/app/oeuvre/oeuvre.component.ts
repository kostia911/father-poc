import { Component} from '@angular/core';
import { ActivatedRoute,RouterConfig,ROUTER_DIRECTIVES  } from '@angular/router';
import {Painting} from './Painting';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Oeuvre` component loaded asynchronously');

@Component({
  selector: 'oeuvre',
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './../home/home.style.css' ],
   directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <router-outlet></router-outlet>
  `
})

export class Oeuvre {
  localState;
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
    
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

}

