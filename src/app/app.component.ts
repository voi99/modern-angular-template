import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonsExampleComponent } from "./examples/buttons/buttons-example.component";
import { FormValidationExampleComponent } from "./examples/form-validation/form-validation-example.component";
import { TailwindMaterialExampleComponent } from "./examples/tailwind-material/tailwind-material-example.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ButtonsExampleComponent, TailwindMaterialExampleComponent, FormValidationExampleComponent],
  template: `
    <div class="min-h-full bg-surface-container p-4">
      <div class="mx-auto flex max-w-screen-lg flex-col gap-4">
        @defer {
          <app-tailwind-material-example />
        }
        @defer {
          <app-form-validation-example />
        }
        @defer {
          <app-buttons-example />
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
