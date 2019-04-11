import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[sceMouseDownUp]',
    exportAs: 'sceMouseDownUp'
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
