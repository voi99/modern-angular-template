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
        <button matButton="filled" class="mat-xs mat-error">mat-error</button>
        <button matButton="filled" class="mat-sm mat-tertiary">mat-tertiary</button>
        <button matButton="filled" class="mat-md">default</button>
        <button matButton="filled" class="mat-secondary">mat-secondary</button>
        <button matButton="tonal">mat-tonal</button>
      </div>
      <div class="mt-2 flex flex-wrap items-center gap-2">
        <button matIconButton aria-label="Settings">
          <mat-icon>settings</mat-icon>
        </button>
        <button matIconButton class="mat-primary" aria-label="Settings">
          <mat-icon>settings</mat-icon>
        </button>
        <button matIconButton class="mat-secondary" aria-label="Settings">
          <mat-icon>settings</mat-icon>
        </button>
        <button matIconButton class="mat-tertiary" aria-label="Settings">
          <mat-icon>settings</mat-icon>
        </button>
        <button matIconButton class="mat-error" aria-label="Settings">
          <mat-icon>settings</mat-icon>
        </button>
      </div>
    </card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsExampleComponent {}
