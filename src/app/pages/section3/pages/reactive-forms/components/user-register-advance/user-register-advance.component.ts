import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register-advance',
  templateUrl: './user-register-advance.component.html',
  styleUrl: './user-register-advance.component.css'
})
export class UserRegisterAdvanceComponent {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onFormSubmit() {
    console.log('submiting form');
  }
}
