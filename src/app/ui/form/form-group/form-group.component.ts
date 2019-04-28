import { Component, ContentChild, HostListener, OnInit } from '@angular/core';
import { FieldDirective } from '@master/ui/directives/form/field/field.directive';
import { labelUpDown } from './form-group-label.animation';

@Component({
  selector: 'sc-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  animations: [labelUpDown]
})
export class FormGroupComponent implements OnInit {
  public placeholder: string;

  @ContentChild(FieldDirective) public field: FieldDirective;

  @HostListener('click') onClick = () => this.field.markAsFocus();

  constructor() { }

  ngOnInit() {
    this.placeholder = this.field.placeholder;
    this.field.placeholder = '';
  }

  public get isLabelMoveUp(): boolean {
    return this.field.isFocus || this.field.input.value;
  }


}
