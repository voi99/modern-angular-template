import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MatButton],
  template: `
    <div class="bg-surface-container p-2">
      <button mat-flat-button class="mat-tonal">Test</button>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
