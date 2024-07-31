import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-tw-mat-integration",
  standalone: true,
  imports: [CardComponent],
  template: `
    <app-card cardTitle="Tailwind - Material Integration">
      <div class="grid md:grid-cols-2 gap-2">
        <div class="bg-primary text-on-primary tw-mat-tile">
          <p>bg-primary</p>
          <p>text-on-primary</p>
        </div>
        <div class="bg-primary-container text-on-primary-container tw-mat-tile">
          <p>bg-primary-container</p>
          <p>text-on-primary-container</p>
        </div>

        <div class="bg-secondary text-on-primary tw-mat-tile">
          <p>bg-secondary</p>
          <p>text-on-secondary</p>
        </div>
        <div class="bg-secondary-container text-on-secondary-container tw-mat-tile">
          <p>bg-secondary-container</p>
          <p>text-on-secondary-container</p>
        </div>

        <div class="bg-tertiary text-on-tertiary tw-mat-tile">
          <p>bg-tertiary</p>
          <p>text-on-tertiary</p>
        </div>
        <div class="bg-tertiary-container text-on-tertiary-container tw-mat-tile">
          <p>bg-tertiary-container</p>
          <p>text-on-tertiary-container</p>
        </div>

        <div class="bg-error text-on-error tw-mat-tile">
          <p>bg-error</p>
          <p>text-on-error</p>
        </div>
        <div class="bg-error-container text-on-error-container tw-mat-tile">
          <p>bg-error-container</p>
          <p>text-on-error-container</p>
        </div>
      </div>
    </app-card>
  `,
  styles: `
    .tw-mat-tile {
      @apply rounded-xl p-4 flex items-center justify-center flex-col;

      p {
        margin: 0;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwMatIntegrationComponent {}
