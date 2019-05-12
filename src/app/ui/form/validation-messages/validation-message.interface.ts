export type ValidationMessageType =
    boolean // key: email | required
    | string
    | { requiredLength: number, actualLength: number } // key: minlength | maxlength
    | { requiredPattern: string, actualValue: string } // key: pattern
    ;

export interface ValidationMessage {
    key: string;
    value: ValidationMessageType;
}
