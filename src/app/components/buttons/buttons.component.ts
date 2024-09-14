import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-buttons",
  standalone: true,
  imports: [MatButton, CardComponent],
  template: `
    <app-card cardTitle="Buttons">
      <div class="flex flex-col gap-4">
        <div class="flex gap-2 flex-wrap items-center">
          <button mat-flat-button class="mat-xs mat-tertiary">xs tertiary</button>
          <button mat-flat-button class="mat-small mat-error">small error</button>
          <button mat-flat-button class="mat-medium">medium default</button>
          <button mat-flat-button class="mat-secondary">base secondary</button>
          <button mat-flat-button class="mat-tonal">base tonal</button>
        </div>
      </div>
    </app-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {}
