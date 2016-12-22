import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[confirm]'
})
export class ConfirmDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event.target']) onClick(element) {
    console.log(this.el);
    console.log(element);
    document.getElementById('confirm-prompt').style.display = "block"
  }
}
