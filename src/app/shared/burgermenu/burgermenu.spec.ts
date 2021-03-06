import {
  async,
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { BurgerMenu } from './burgermenu.directive';

describe('BurgerMenu directive', () => {
  // Create a test component to test directives
  @Component({
    template: '',
    directives: [ BurgerMenu ]
  })
  class TestComponent {}

  it('should sent font-size to x-large', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.overrideTemplate(TestComponent, '<div x-large>Content</div>')
      .createAsync(TestComponent).then((fixture: any) => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement.children[0];
        expect(compiled.style.fontSize).toBe('x-large');
      });
  })));

});
