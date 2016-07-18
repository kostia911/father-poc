import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router"
/*
 * Directive
 * for nice burger menu
 */
@Component({
  selector: 'painting', // using [ ] means selecting attributes
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './painting.template.html',
   styleUrls: [ './../../home/home.style.css' ]
})
export class Painting {
    
     
    
  constructor(private element: ElementRef,private renderer: Renderer) {
      
  }
  
  
}
