import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { FieldDirective } from '@master/ui/directives/form/field/field.directive';
import { labelUpDown } from './form-group-label.animation';

@Component({
    selector: 'sc-form-group',
    templateUrl: './form-group.component.html',
    styleUrls: ['./form-group.component.scss'],
    animations: [labelUpDown]
})
export class FormGroupComponent implements AfterContentInit {
    @Input() isOnlyLastErrorMessage = true;
    public placeholder: string;

    @ContentChild(FieldDirective, {static: false}) public field: FieldDirective;

    constructor() {
    }


    ngAfterContentInit() {
        this.placeholder = this.field.placeholder;
        this.field.placeholder = '';
    }

    public get isLabelMoveUp(): boolean {
        return this.field.isFocus || this.field.input.value;
    }

    public markAsFocus(): void {
        this.field.markAsFocus();
    }
}
