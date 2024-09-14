import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { DynamicFormValidationMessagesComponent } from "./components/dynamic-form-field-error-messages/dynamic-form-field-error-messages.component";
import { TwMatIntegrationComponent } from "./components/tw-mat-integration/tw-mat-integration.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ButtonsComponent, TwMatIntegrationComponent, DynamicFormValidationMessagesComponent],
  template: `
    <div class="bg-surface-container p-4 min-h-full">
      <div class="flex flex-col gap-4 max-w-screen-lg mx-auto">
        @defer {
          <app-tw-mat-integration />
        }
        @defer {
          <app-dynamic-form-field-error-messages />
        }
        @defer {
          <app-buttons />
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
