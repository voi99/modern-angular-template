import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "tailwind-material-example",
  standalone: true,
  imports: [CardComponent],
  template: `
    <card cardTitle="Tailwind - Material Integration">
      <div class="grid gap-2 md:grid-cols-2">
        <div class="tw-mat-tile bg-primary text-on-primary">
          <p>bg-primary</p>
          <p>text-on-primary</p>
        </div>
        <div class="tw-mat-tile bg-primary-container text-on-primary-container">
          <p>bg-primary-container</p>
          <p>text-on-primary-container</p>
        </div>

        <div class="tw-mat-tile bg-secondary text-on-primary">
          <p>bg-secondary</p>
          <p>text-on-secondary</p>
        </div>
        <div class="tw-mat-tile bg-secondary-container text-on-secondary-container">
          <p>bg-secondary-container</p>
          <p>text-on-secondary-container</p>
        </div>

        <div class="tw-mat-tile bg-tertiary text-on-tertiary">
          <p>bg-tertiary</p>
          <p>text-on-tertiary</p>
        </div>
        <div class="tw-mat-tile bg-tertiary-container text-on-tertiary-container">
          <p>bg-tertiary-container</p>
          <p>text-on-tertiary-container</p>
        </div>

        <div class="tw-mat-tile bg-error text-on-error">
          <p>bg-error</p>
          <p>text-on-error</p>
        </div>
        <div class="tw-mat-tile bg-error-container text-on-error-container">
          <p>bg-error-container</p>
          <p>text-on-error-container</p>
        </div>
      </div>
    </card>
  `,
  styles: `
    .tw-mat-tile {
      @apply flex flex-col items-center justify-center rounded-xl p-4;

      p {
        margin: 0;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TailwindMaterialExampleComponent {}
