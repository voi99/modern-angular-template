import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { CardComponent } from "../card/card.component";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { OnSubmitErrorStateMatcher } from "src/app/core/form-validation/error-state-matchers";
import { ControlFormErrors } from "@form-validation/control-form-errors";

@Component({
  selector: "form-validation-example",
  standalone: true,
  imports: [ControlFormErrors, MatFormField, MatButton, MatLabel, MatInput, CardComponent, ReactiveFormsModule],
  template: `
    <card cardTitle="Dynamic Form Validation Messages">
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <p>On Touched Error Matcher (default)</p>
          <form [formGroup]="onTouchedForm" class="flex w-full flex-col items-start gap-2">
            <mat-form-field appearance="outline" class="mat-small w-full">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" />
              <mat-error control-errors />
            </mat-form-field>
            <mat-form-field appearance="outline" class="mat-small w-full">
              <mat-label>Password</mat-label>
              <input matInput formControlName="password" type="password" />
              <mat-error control-errors />
            </mat-form-field>
            <button mat-button>Submit</button>
          </form>
        </div>
        <div>
          <p>On Submit Error Matcher</p>
          <form [formGroup]="onSubmitForm" class="flex w-full flex-col items-start gap-2">
            <mat-form-field appearance="outline" class="mat-small w-full">
              <mat-label>Username</mat-label>
              <input matInput formControlName="username" [errorStateMatcher]="onSubmitErrorStateMatcher" />
              <mat-error control-errors />
            </mat-form-field>
            <mat-form-field appearance="outline" class="mat-small w-full">
              <mat-label>Password</mat-label>
              <input
                matInput
                formControlName="password"
                [errorStateMatcher]="onSubmitErrorStateMatcher"
                type="password" />
              <mat-error control-errors />
            </mat-form-field>
            <button mat-button>Submit</button>
          </form>
        </div>
      </div>
    </card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormValidationExampleComponent {
  private fb = inject(FormBuilder);

  /**
   * You can either create and provide a new instance of `OnSubmitErrorMatcher` as an input,
   * or provide it in the component's providers using the `provideOnSubmitErrorMatcher` function.
   */
  onSubmitErrorStateMatcher = new OnSubmitErrorStateMatcher();

  onTouchedForm = this.fb.nonNullable.group({
    email: ["", { validators: [Validators.required, Validators.email] }],
    password: ["", Validators.required],
  });

  onSubmitForm = this.fb.nonNullable.group({
    username: ["", { validators: [Validators.required, Validators.minLength(5)] }],
    password: ["", Validators.required],
  });
}
