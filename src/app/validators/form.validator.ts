import { FormControl } from '@angular/forms';

export function formLabelLenValidator(
  minLength: number, maxLength: number): (control: FormControl) => {[s: string]: boolean} {
  return (control: FormControl) => {
    if (!control.value || (control.value.length < minLength) || (control.value.length > maxLength)) {
      return {'invalidLength': true};
    }
    return null;
  };
}

