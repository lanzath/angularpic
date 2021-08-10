import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    currentDisplay: string;

    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        // Ao ser carregada a diretiva pega o valor do display atual.
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;

        // Aguarda à emissão do observable
        this.userService.getUser().subscribe(user => {
            if (user) {
                // Se o usuário estiver logado então é mostrado o currentDisplay, o estado atual que o elemento tinha.
                this.renderer.setElementStyle(this.element.nativeElement, 'display', this.currentDisplay);
            } else {
                // Ao fazer logout, armazena o display atual e o substitui por none.
                this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
                this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
            }
        });
    }
}
