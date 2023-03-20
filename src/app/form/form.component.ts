import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      jobPosition: [''],
      email: ['', Validators.email]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      window.alert('Please fill in the madadotory fields ');
      return;
    }
    console.log(this.form.value);
  }

}
