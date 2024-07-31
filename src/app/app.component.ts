import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { FormFieldsComponent } from "./components/form-fields/form-fields.component";
import { TwMatIntegrationComponent } from "./components/tw-mat-integration/tw-mat-integration.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ButtonsComponent, FormFieldsComponent, TwMatIntegrationComponent],
  template: `
    <div class="bg-surface-container p-4 min-h-full">
      <div class="flex flex-col gap-4 max-w-screen-lg mx-auto">
        @defer {
          <app-tw-mat-integration />
        }
        @defer {
          <app-buttons />
        }
        @defer {
          <app-form-fields />
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
