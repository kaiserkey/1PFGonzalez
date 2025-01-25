import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaderSize]',
  standalone: false,
})
export class HeaderSizeDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'font-size', '20px');
  }
}
