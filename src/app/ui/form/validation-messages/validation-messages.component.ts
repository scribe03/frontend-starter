import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ValidationMessage } from './validation-message.interface';

@Component({
    selector: 'sc-validation-messages',
    templateUrl: './validation-messages.component.html',
    styleUrls: ['./validation-messages.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationMessagesComponent {
    @Input() public isOnlyLastErrorMessage = true;
    @Input() public isInvalid: false;
    @Input() set errors(err: ValidationErrors) {
        this.prepareMessages(err);
    }

    public messages: ValidationMessage[] = [];
    private defaultValidators = ['minlength', 'maxlength', 'pattern', 'email', 'required'];

    public isDefaultValidator(key: string): boolean {
        return this.defaultValidators.indexOf(key) === -1 ? false : true;
    }

    public prepareMessages(err: ValidationErrors): void {
        if (err) {
            Object.keys(err).map(name => {
                if (this.isOnlyLastErrorMessage) {
                    this.messages = [];
                }
                this.messages.push({key: name, value: err[name]});
            });
        }

    }
}
