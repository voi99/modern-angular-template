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
          <button mat-flat-button class="mat-xs mat-tertiary">Test</button>
          <button mat-flat-button class="mat-small mat-error">Test</button>
          <button mat-flat-button class="mat-medium">Test</button>
          <button mat-flat-button class="mat-secondary">Test</button>
          <button mat-flat-button class="mat-tonal">Test</button>
        </div>
      </div>
    </app-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {}
