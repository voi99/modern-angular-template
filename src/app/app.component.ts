import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MatButton],
  template: ` <button mat-flat-button class="mat-tonal">Test</button> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
