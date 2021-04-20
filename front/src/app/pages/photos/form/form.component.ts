import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Data } from '../../../shared/data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Input() data: Data;
  @Output() updateEvent = new EventEmitter<Data>();

  constructor(private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        pathControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.form.patchValue({
        idControl: this.data?.id,
        pathControl: this.data?.path,
      }
    );


  }

  delete(): void {

  }

  onUpdate(): void {
    const values = this.form.value;
    this.data.id = values.idControl;
    this.data.path = values.pathControl;

}
}
