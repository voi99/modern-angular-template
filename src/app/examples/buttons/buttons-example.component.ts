import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "buttons-example",
  imports: [MatButton, CardComponent],
  template: `
    <card cardTitle="Buttons">
      <div class="flex flex-wrap items-center gap-2">
        <button mat-flat-button class="mat-xs mat-error">mat-error</button>
        <button mat-flat-button class="mat-sm mat-tertiary">mat-tertiary</button>
        <button mat-flat-button class="mat-md">default</button>
        <button mat-flat-button class="mat-secondary">mat-secondary</button>
        <button mat-flat-button class="mat-tonal">mat-tonal</button>
      </div>
    </card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsExampleComponent {}
