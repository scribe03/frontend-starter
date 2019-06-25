import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { InputDirective } from '@master/ui/directives/form/input/input.directive';
import { labelUpDown } from './form-group-label.animation';

@Component({
    selector: 'sc-form-group',
    templateUrl: './form-group.component.html',
    styleUrls: ['./form-group.component.scss'],
    animations: [labelUpDown]
})
export class FormGroupComponent implements AfterContentInit {
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
