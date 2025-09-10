import { Provider, EnvironmentProviders, provideZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "../app.routes";

export function provideCore(): (Provider | EnvironmentProviders)[] {
  return [provideZonelessChangeDetection(), provideRouter(routes)];
}
