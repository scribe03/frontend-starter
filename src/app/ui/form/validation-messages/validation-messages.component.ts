import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'sc-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})
export class ValidationMessagesComponent implements OnInit {

  @Input() set errors(err: ValidationErrors) {
    if (err) {
      Object.keys(err).map(name => console.log(name, err[name]));
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
