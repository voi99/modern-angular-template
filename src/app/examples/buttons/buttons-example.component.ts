import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButton, MatIconButton } from "@angular/material/button";
import { CardComponent } from "../card/card.component";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "buttons-example",
  imports: [MatButton, CardComponent, MatIconButton, MatIcon],
  template: `
    <card cardTitle="Buttons">
      <div class="flex flex-wrap items-center gap-2">
        <button mat-flat-button class="mat-xs mat-error">mat-error</button>
        <button mat-flat-button class="mat-sm mat-tertiary">mat-tertiary</button>
        <button mat-flat-button class="mat-md">default</button>
        <button mat-flat-button class="mat-secondary">mat-secondary</button>
        <button mat-flat-button class="mat-tonal">mat-tonal</button>
      </div>
      <div class="mt-2 flex flex-wrap items-center gap-2">
        <button mat-icon-button>
          <mat-icon>settings</mat-icon>
        </button>
        <button mat-icon-button class="mat-primary">
          <mat-icon>settings</mat-icon>
        </button>
        <button mat-icon-button class="mat-secondary">
          <mat-icon>settings</mat-icon>
        </button>
        <button mat-icon-button class="mat-tertiary">
          <mat-icon>settings</mat-icon>
        </button>
        <button mat-icon-button class="mat-error">
          <mat-icon>settings</mat-icon>
        </button>
      </div>
    </card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsExampleComponent {}
