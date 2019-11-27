import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent, SomeDirective, SomeService } from './app.component';

export class MockSomeService {
  title = 24;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, SomeDirective
      ],
    })

    TestBed.overrideComponent(SomeDirective, {
      set: { providers: [{ provide: SomeService, useClass: MockSomeService }] },
    });
    
    TestBed.compileComponents();
  }));

  it(`should have title from service`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    
    
    const someDirectiveDe = fixture.debugElement.query(By.directive(SomeDirective));
    const someDirective = someDirectiveDe.injector.get(SomeDirective);

    expect(someDirective.answer).toBe(42);
  });

});
