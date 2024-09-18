import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject, input, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {
  AbstractControl,
  ControlContainer,
  FormControlStatus,
  FormGroupDirective,
  NgForm,
  TouchedChangeEvent,
  ValidationErrors,
} from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";
import { EMPTY, filter, iif, merge, Observable } from "rxjs";
import { FORM_ERROR_MESSAGES } from "./form-error-messages.token";

@Component({
  selector: "mat-error[control-errors]",
  template: ` {{ errorMessage() }} `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorsComponent implements AfterViewInit {
  private readonly matFormField = inject(MatFormField);
  private readonly destroyRef = inject(DestroyRef);
  private readonly controlContainer = inject(ControlContainer, { optional: true });

  readonly errorMessages = input(inject(FORM_ERROR_MESSAGES));

  errorMessage = signal<string | null>(null);

  /**
   * @warning This code accesses the private `_control` property of `MatFormField`.
   * It is not part of the public API and may be removed or altered in future versions
   * (potentially switched to native JavaScript private fields).
   * This could result in breaking changes.
   */
  get control() {
    return this.matFormField?._control?.ngControl?.control as AbstractControl;
  }

  get formDirective() {
    return this.controlContainer?.formDirective as NgForm | FormGroupDirective | null;
  }

  ngAfterViewInit(): void {
    merge(this.statusChanges$(), this.onTouchedEvent$(), this.formSubmit$())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          if (this.control?.errors) {
            this.setErrorMessage(this.control.errors);
          }
        },
      });
  }

  private setErrorMessage(errors: ValidationErrors): void {
    const firstErrorKey = Object.keys(errors)?.[0];
    const message = this.errorMessages()?.[firstErrorKey](errors[firstErrorKey]);
    this.errorMessage.set(message || "Field invalid");
  }

  private statusChanges$(): Observable<FormControlStatus> {
    return this.control.statusChanges;
  }

  private onTouchedEvent$(): Observable<TouchedChangeEvent> {
    return this.control.events.pipe(filter((event) => event instanceof TouchedChangeEvent));
  }

  private formSubmit$(): Observable<unknown> {
    return iif(() => !!this.formDirective, this.formDirective!.ngSubmit, EMPTY);
  }
}
