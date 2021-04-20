import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Data } from '../../../shared/data';
import { BackendService } from "../../../shared/backend.service";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Input() data: Data;
  @Output() updateEvent = new EventEmitter<Data>();
  private BackendService: BackendService;

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

  delete(dataId: number): void {

    this.BackendService.deleteOne(dataId);

  }

  onUpdate(dataId: number, data: Data): void {
    const values = this.form.value;
    this.data.id = values.idControl;
    this.data.path = values.pathControl;

    this.BackendService.update(this.data.id, this.data);

}
}
