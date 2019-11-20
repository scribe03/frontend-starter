import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  public fg: FormGroup;
  public cities: { key: string, value: string }[] = [
    {key: 'plock', value: 'Płock'},
    {key: 'warszawa', value: 'Warszawa'},
    {key: 'krakow', value: 'Kraków'},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.generateForm();
  }

  private generateForm(): void {
    this.fg = this.fb.group({
      city: ['krakow', [
          Validators.required,
        ]
      ],
    });

    // this.fg.get('city').valueChanges.subscribe((val) => console.log(val));
  }
}
