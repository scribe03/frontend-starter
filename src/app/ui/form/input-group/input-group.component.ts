import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { InputDirective } from '@master/ui/directives/form/input/input.directive';
import { labelUpDown } from './input-group-label.animation';

@Component({
    selector: 'sc-input-group',
    templateUrl: './input-group.component.html',
    styleUrls: ['./input-group.component.scss'],
    animations: [labelUpDown]
})
export class InputGroupComponent implements AfterContentInit {
    @Input() isOnlyLastErrorMessage = true;
    @Input() isShowErrorWithoutTouched = false;
    @ContentChild(InputDirective, {static: false}) public input: InputDirective;

    public placeholder: string;

    ngAfterContentInit() {
        this.placeholder = this.input.placeholder;
        this.input.placeholder = '';
    }

    public get isLabelMoveUp(): boolean {
        return this.input.isFocus || this.input.control.value;
    }

    public markAsFocus(): void {
        this.input.markAsFocus();
    }
}
