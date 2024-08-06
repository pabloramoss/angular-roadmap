import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isValidField, getFieldError } from '../../../../utils/validators';

@Component({
  selector: 'app-user-register-intermediate',
  templateUrl: './user-register-intermediate.component.html',
  styleUrl: './user-register-intermediate.component.css'
})
export class UserRegisterIntermediateComponent {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onFormSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('submiting form',this.myForm.value);
    this.myForm.reset();
    alert('Form submitted');
  }

  isValidField(fieldName: string): boolean | null {
    console.log("asd", isValidField(this.myForm, fieldName))
    return isValidField(this.myForm, fieldName);
  }

  getFieldError(fieldName: string): string | null {
    return getFieldError(this.myForm, fieldName);
  }
}
