import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-form-fields",
  standalone: true,
  imports: [MatFormField, MatLabel, MatInput, CardComponent],
  template: `
    <app-card cardTitle="Form Fields">
      <div class="flex gap-2 flex-wrap items-center">
        @for (size of formFieldSizes; track size) {
          <mat-form-field appearance="outline" subscriptSizing="dynamic" [class]="size">
            <mat-label>Email</mat-label>
            <input matInput />
          </mat-form-field>
        }
        <mat-form-field appearance="outline" subscriptSizing="dynamic">
          <mat-label>Email</mat-label>
          <input matInput />
        </mat-form-field>
      </div>
    </app-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldsComponent {
  formFieldSizes = ["mat-xs", "mat-small", "mat-medium"];
}
