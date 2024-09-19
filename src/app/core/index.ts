import { Provider, EnvironmentProviders, provideZoneChangeDetection } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { routes } from "../app.routes";

export function provideCore(): (Provider | EnvironmentProviders)[] {
  return [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()];
}
