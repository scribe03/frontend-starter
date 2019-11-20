import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISelectOption } from '@master/ui/form/select/select-option/select-option.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'sc-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit, AfterViewInit {
  @Input() public value: any;
  public isSelect: Subject<ISelectOption> = new Subject();

  private state: ISelectOption = {
    value: null,
    valueToDisplay: '',
    isSelected: false
  };

  constructor(
    // private renderer: Renderer2,
    private inputRef: ElementRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.state.value = this.value;
    this.state.valueToDisplay = this.inputRef.nativeElement.querySelector('li').innerText;
  }

  public setInitialSelectedValue(value: number | string): void {
    this.state.isSelected = value === this.state.value;
  }

  public select(): void {
    this.state.isSelected = !this.state.isSelected;
    this.isSelect.next(this.state);
  }

  public getState(): ISelectOption {
    return this.state;
  }
}
