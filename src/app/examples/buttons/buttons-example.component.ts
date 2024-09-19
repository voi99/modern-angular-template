import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "buttons-example",
  standalone: true,
  imports: [MatButton, CardComponent],
  template: `
    <card cardTitle="Buttons">
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap items-center gap-2">
          <button mat-flat-button class="mat-xs mat-tertiary">xs tertiary</button>
          <button mat-flat-button class="mat-small mat-error">small error</button>
          <button mat-flat-button class="mat-medium">medium default</button>
          <button mat-flat-button class="mat-secondary">base secondary</button>
          <button mat-flat-button class="mat-tonal">base tonal</button>
        </div>
      </div>
    </card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsExampleComponent {}
