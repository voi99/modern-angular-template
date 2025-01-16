import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { MatIcon } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: "icons-example",
  imports: [CardComponent, MatIcon, MatTooltip],
  template: `
    <card cardTitle="Icons">
      <div class="flex flex-wrap items-center gap-4">
        <mat-icon matTooltip="default">settings</mat-icon>
        <mat-icon class="mat-primary" matTooltip="mat-primary">thumb_up</mat-icon>
        <mat-icon class="mat-secondary" matTooltip="mat-secondary">fingerprint</mat-icon>
        <mat-icon class="mat-tertiary" matTooltip="mat-tertiary">android</mat-icon>
        <mat-icon class="mat-error" matTooltip="mat-error">delete</mat-icon>
      </div>
    </card>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsExampleComponent {}
