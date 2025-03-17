import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonsExampleComponent } from "./examples/buttons/buttons-example.component";
import { FormValidationExampleComponent } from "./examples/form-validation/form-validation-example.component";
import { TailwindMaterialExampleComponent } from "./examples/tailwind-material/tailwind-material-example.component";
import { IconsExampleComponent } from "./examples/icons/icons-example.component";

@Component({
  selector: "app-root",
  imports: [
    ButtonsExampleComponent,
    TailwindMaterialExampleComponent,
    FormValidationExampleComponent,
    IconsExampleComponent,
  ],
  template: `
    <div class="bg-surface-container min-h-full p-4">
      <div class="mx-auto flex max-w-screen-lg flex-col gap-4">
        @defer {
          <tailwind-material-example />
        } @placeholder {
          <div class="bg-surface-dim h-[700px] animate-pulse rounded-xl md:h-96"></div>
        }
        @defer {
          <form-validation-example />
        } @placeholder {
          <div class="bg-surface-dim h-[600px] animate-pulse rounded-xl md:h-80"></div>
        }
        @defer {
          <buttons-example />
        } @placeholder {
          <div class="bg-surface-dim h-52 animate-pulse rounded-xl md:h-28"></div>
        }
        @defer {
          <icons-example />
        } @placeholder {
          <div class="bg-surface-dim h-52 animate-pulse rounded-xl md:h-28"></div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
