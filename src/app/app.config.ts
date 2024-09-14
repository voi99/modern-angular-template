import { ApplicationConfig } from "@angular/core";
import { provideCore } from "./core";

export const appConfig: ApplicationConfig = {
  providers: [provideCore()],
};
