import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent, SomeDirective } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, SomeDirective
      ],
    }).compileComponents();
  }));

  it(`should have as title 'shiny-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    
    
    const someDirectiveDe = fixture.debugElement.query(By.directive(SomeDirective));
    const someDirective = someDirectiveDe.injector.get(SomeDirective);

    expect(someDirective.answer).toBe(42);
  });


});
