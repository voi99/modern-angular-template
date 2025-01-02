import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonsExampleComponent } from "./examples/buttons/buttons-example.component";
import { FormValidationExampleComponent } from "./examples/form-validation/form-validation-example.component";
import { TailwindMaterialExampleComponent } from "./examples/tailwind-material/tailwind-material-example.component";

@Component({
  selector: "app-root",
  imports: [ButtonsExampleComponent, TailwindMaterialExampleComponent, FormValidationExampleComponent],
  template: `
    <div class="min-h-full bg-surface-container p-4">
      <div class="mx-auto flex max-w-screen-lg flex-col gap-4">
        @defer {
          <tailwind-material-example />
        } @placeholder {
          <div class="h-[700px] animate-pulse rounded-xl bg-surface-dim md:h-96"></div>
        }
        @defer {
          <form-validation-example />
        } @placeholder {
          <div class="h-[600px] animate-pulse rounded-xl bg-surface-dim md:h-80"></div>
        }
        @defer {
          <buttons-example />
        } @placeholder {
          <div class="h-52 animate-pulse rounded-xl bg-surface-dim md:h-28"></div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
