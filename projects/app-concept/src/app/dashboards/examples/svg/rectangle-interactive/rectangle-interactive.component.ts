import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MouseDownUpDirective } from '@master/ui/directives/mouse-down-up/mouse-down-up.directive';

@Component({
    selector: 'sc-rectangle-interactive',
    templateUrl: './rectangle-interactive.component.html',
    styleUrls: ['./rectangle-interactive.component.scss']
})
export class RectangleInteractiveComponent implements OnInit {
    public restrictionStrokeWidth = 4;
    public restrictionLeftX = 50;
    public restrictionRightX = 100;

    @ViewChild('restrictionLeft', {static: true}) protected restrictionLeft: MouseDownUpDirective;
    @ViewChild('restrictionRight', {static: true}) protected restrictionRight: MouseDownUpDirective;

    constructor() {
    }

    public ngOnInit() {
    }

    @HostListener('mouseup') public onMouseup() {
        this.restrictionLeft.reset();
        this.restrictionRight.reset();
    }

    @HostListener('mousemove', ['$event']) public onMousemove(event: MouseEvent) {
        if (this.restrictionLeft.isDown && (event.offsetX + this.restrictionStrokeWidth) <= this.restrictionRightX) {
            this.restrictionLeftX = event.offsetX;
        }

        if (this.restrictionRight.isDown && event.offsetX >= (this.restrictionLeftX + this.restrictionStrokeWidth)) {
            this.restrictionRightX = event.offsetX;
        }
    }

    public getLengthBox(): number {
        const length = this.restrictionRightX - this.restrictionLeftX;
        return (length > 0) ? length : 0;
    }
}
