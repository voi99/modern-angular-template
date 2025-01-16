import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from "@angular/material/card";

@Component({
  selector: "card",
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  template: `
    <mat-card appearance="outlined">
      <mat-card-header>
        <mat-card-title>
          {{ cardTitle() }}
        </mat-card-title>
      </mat-card-header>
      <mat-card-content class="mt-4">
        <ng-content />
      </mat-card-content>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  cardTitle = input.required<string>();
}
