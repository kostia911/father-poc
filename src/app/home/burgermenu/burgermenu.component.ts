import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router"
/*
 * Directive
 * for nice burger menu
 */
@Component({
  selector: 'burgermenu', // using [ ] means selecting attributes
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './burgermenu.template.html',
   styleUrls: [ './burgermenu.style.css' ]
})
export class BurgerMenu {
    
     
    
  constructor(private element: ElementRef,private renderer: Renderer) {
      var node:HTMLElement=element.nativeElement
      
       var   transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        };
        // transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        // support = { transitions : Modernizr.csstransitions };
      
  }
  
  public toggleMenu()
  {
    
    var node:HTMLElement=this.element.nativeElement;
    var menu=node.querySelector("#btn-menu");
    
     if(!menu.classList.contains('open')) {
        menu.classList.add("open");
    }
    else {
       menu.classList.remove('open');
    }
    
    var overlay = node.querySelector( 'div.overlay' );
    
    console.log(overlay);
    
     if( overlay.classList.contains('open')) {
           overlay.classList.remove( 'open' );
            overlay.classList.add('close' );
            // var onEndTransitionFn = function( ev ) {
            //     if( support.transitions ) {
            //         if( ev.propertyName !== 'visibility' ) return;
            //         this.removeEventListener( transEndEventName, onEndTransitionFn );
            //     }
            //     classie.remove( overlay, 'close' );
            // };
            // if( support.transitions ) {
            //     overlay.addEventListener( transEndEventName, onEndTransitionFn );
            // }
            // else {
            //     onEndTransitionFn();
            // }
            overlay.classList.remove( 'close' )
        }
        else if( !overlay.classList.contains('close')) {
            overlay.classList.add('open');
        }  
     
  }
}
