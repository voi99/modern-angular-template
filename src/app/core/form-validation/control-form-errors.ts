import { NgModule } from "@angular/core";
import { MatError } from "@angular/material/form-field";
import { ControlErrorsComponent } from "./control-errors.component";

@NgModule({
  imports: [MatError, ControlErrorsComponent],
  exports: [MatError, ControlErrorsComponent],
})
export class ControlFormErrors {}
