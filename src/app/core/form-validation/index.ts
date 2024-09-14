import { NgModule } from "@angular/core";
import { MatError } from "@angular/material/form-field";
import { ErrorMessageComponent } from "./error-message.component";

@NgModule({
  imports: [MatError, ErrorMessageComponent],
  exports: [MatError, ErrorMessageComponent],
})
export class FormValidation {}
