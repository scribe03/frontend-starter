import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input, OnDestroy,
  OnInit,
  QueryList,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionComponent } from '@master/ui/form/select/select-option/select-option.component';
import { ISelectOption } from '@master/ui/form/select/select-option/select-option.model';
import { merge, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sc-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectGroupComponent),
      multi: true
    }]
})
export class SelectGroupComponent implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor {
  @Input() public placeholder: string;
  @ContentChildren(SelectOptionComponent) optionComponents !: QueryList<SelectOptionComponent>;

  public val: any = null;
  public valToDisplay: string = null;

  private subscriptions = new Subscription();
  private allOptions: ISelectOption[] = []; /// ?

  public onChange: any = () => {};
  public onTouch: any = () => {};

  public set value(val) {
    if ( val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  constructor(
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private inputRef: ElementRef
  ) { }

  public ngOnInit() {

  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this.setupSelectedOptionAsObservableAndSetInitialSelectedValue();
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setFocus(isFocused: boolean): void {
    console.log('-FOCUSED-', isFocused);
  }

  public setKeyDown(val): void {
    this.writeValue(val);
  }

  private setupSelectedOptionAsObservableAndSetInitialSelectedValue(): void {
    const events: Observable<ISelectOption>[] = [];

    this.optionComponents.forEach((optionComponent: SelectOptionComponent) => {
      optionComponent.setInitialSelectedValue(this.value);
      events.push(optionComponent.isSelect.asObservable());

      if (this.val === optionComponent.getState().value) {
        this.setInitialDisplayValue(optionComponent.getState().valueToDisplay);
      }
    });

    this.subscriptions.add(
      merge(...events).subscribe((option: ISelectOption) => {
        this.writeValue(option.value);
        this.valToDisplay = option.valueToDisplay;
      })
    );

    // this.cdRef.markForCheck();
  }

  private setInitialDisplayValue(value: string): void {
    // Defer setting the value in order to avoid the "Expression
    // has changed after it was checked" errors from Angular.
    Promise.resolve().then(() => this.valToDisplay = value);
  }

  private unselect(): void {

  }
}
