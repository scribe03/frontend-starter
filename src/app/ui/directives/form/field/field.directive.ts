import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AbstractControl, NgControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[scField]'
})
export class FieldDirective {
    private focus = false;
    private selectedRootElement;

    @HostListener('focus') onFocus = () => this.focus = true;
    @HostListener('blur') onBlur = () => this.focus = false;

    constructor(
        private renderer: Renderer2,
        private inputRef: ElementRef,
        private inputControl: NgControl
    ) {
        this.selectedRootElement = this.renderer.selectRootElement(this.inputRef.nativeElement);
    }

    public get input(): NgControl {
        return this.inputControl;
    }

    public get control(): AbstractControl {
        return this.input.control;
    }

    public get errors(): ValidationErrors {
        return this.input.errors;
    }

    public get placeholder(): string {
        return this.selectedRootElement.placeholder || '';
    }

    public set placeholder(value: string) {
        this.selectedRootElement.placeholder = value;
    }

    public get isFocus(): boolean {
        return this.focus;
    }

    public markAsFocus() {
        this.selectedRootElement.focus();
    }

    public markAsBlur() {
        this.selectedRootElement.blur();
    }
}
