import { Provider } from "@angular/core";
import { AbstractControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class OnSubmitErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null) {
    return !!(control && control.invalid && form && form.submitted);
  }
}

export function provideOnSubmitErrorMatcher(): Provider {
  return { provide: ErrorStateMatcher, useClass: OnSubmitErrorStateMatcher };
}
