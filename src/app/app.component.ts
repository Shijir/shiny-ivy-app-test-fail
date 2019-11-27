import { Component, Directive, Injectable } from '@angular/core';

@Injectable()
export class SomeService {
  title = 42;
}

@Directive({ selector: '[someDirective]', providers: [SomeService] })
export class SomeDirective {
  answer: number;
  constructor(public someService: SomeService) {
    this.answer = someService.title;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shiny-ivy-app';
}
