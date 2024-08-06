import { FormGroup } from '@angular/forms';

export function isValidField(form: FormGroup, fieldName: string): boolean | null {
  console.log('fields control', { form, fieldName });
  return form.controls[fieldName].errors && form.controls[fieldName].touched;
}

export function getFieldError(form: FormGroup, fieldName: string): string | null {
  if (!form.controls[fieldName]) return null;

  const errors = form.controls[fieldName].errors || {};

  for (const key of Object.keys(errors)) {
    switch (key) {
      case 'required':
        return 'This field is required';
      case 'minlength':
        return `Min length characters is ${errors[key].requiredLength}`;
      case 'min':
        return `Min value is ${errors[key].min}`;
      case 'email':
        return 'Invalid email';
      default:
        return 'Unknown error';
    }
  }
  return null;
}