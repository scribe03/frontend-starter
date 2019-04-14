import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[scMouseDownUp]',
    exportAs: 'scMouseDownUp'
})
export class MouseDownUpDirective {
    public isDown = false;
    public isUp = false;

    constructor() {
    }

    @HostListener('mousedown') onDown() {
        this.isDown = true;
        this.isUp = false;
    }

    @HostListener('mouseup') onUp() {
        this.isDown = false;
        this.isUp = true;
    }

    public reset(): void {
        this.isDown = false;
        this.isUp = false;
    }
}
