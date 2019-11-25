import { Component, Directive, Optional, SkipSelf, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[previouslySibling]' })
export class PreviouslySibling {
  constructor(
    private template: TemplateRef<any>,
    @Optional()
    @SkipSelf()
    private vc: ViewContainerRef){
      vc.createEmbeddedView(template);
    }
}

@Directive({ selector: '[anchorViewContainer]', host: {
  '[class.anchor-view-container]':'true'
} })
export class AnchorViewContainer {
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
