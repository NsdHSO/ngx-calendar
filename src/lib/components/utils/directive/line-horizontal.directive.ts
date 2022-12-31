import {
  Directive,
  ElementRef,
  inject,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[lineHorizontal]',
  standalone: true
})
export class LineHorizontalDirective {
  private readonly _renderer2 = inject(
    Renderer2);
  private readonly _elementRef = inject(ElementRef)

  constructor() {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'background', '#dadce0')
    this._renderer2.setStyle(this._elementRef.nativeElement, 'width', '100%')
    this._renderer2.setStyle(this._elementRef.nativeElement, 'height', '1px')
  }
}
