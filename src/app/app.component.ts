import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MatButton, MatIconButton, MatIcon],
  template: `
    <div class="bg-surface-container p-2 flex items-center gap-2 justify-center">
      <button mat-flat-button class="mat-xs">Test</button>
      <button mat-flat-button class="mat-small">Test</button>
      <button mat-flat-button class="mat-medium">Test</button>
      <button mat-flat-button>Test</button>
      <button mat-icon-button class="mat-tertiary">
        <mat-icon> note </mat-icon>
      </button>
      <mat-icon class="mat-error">light_mode</mat-icon>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
