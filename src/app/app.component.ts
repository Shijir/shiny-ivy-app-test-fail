import { Component, Directive, Optional, SkipSelf, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[previouslySibling]', host: {
  '[class.previously-sibling]':'true'
} })
export class PreviouslySibling {
  constructor(
    private template: TemplateRef<any>,
    @Optional()
    @SkipSelf()
    private vc: ViewContainerRef){
      vc.createEmbeddedView(template);
    }
}

@Directive({ selector: '[parentViewContainer]', host: {
  '[class.parent-view-container]':'true'
} })
export class ParentViewContainer {
  constructor(private vcr: ViewContainerRef) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shiny-ivy-app';
}
