import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness = '80%';

    // el vai pegar o elemento no DOM no qual a diretiva foi aplicada.
    constructor(
        private el: ElementRef,
        private render: Renderer
    ) {}

    @HostListener('mouseover')
    darkenOn() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}
