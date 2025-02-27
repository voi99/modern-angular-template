import { Provider, EnvironmentProviders, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "../app.routes";

export function provideCore(): (Provider | EnvironmentProviders)[] {
  return [provideExperimentalZonelessChangeDetection(), provideRouter(routes)];
}
