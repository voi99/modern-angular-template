import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatButton, MatIconButton, MatMiniFabButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatChipListbox, MatChipOption } from "@angular/material/chips";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton,
    MatIconButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatMiniFabButton,
    MatChipListbox,
    MatChipOption,
  ],
  template: `
    <div class="bg-surface-container p-2 flex items-center gap-2 justify-center flex-wrap">
      <button mat-flat-button class="mat-xs">Test</button>
      <button mat-flat-button class="mat-small">Test</button>
      <button mat-flat-button class="mat-medium">Test</button>
      <button mat-flat-button>Test</button>
      <button mat-icon-button class="mat-tertiary">
        <mat-icon> note </mat-icon>
      </button>
      <button mat-mini-fab>
        <mat-icon> dark_mode</mat-icon>
      </button>
      <button mat-mini-fab class="mat-secondary">
        <mat-icon> dark_mode</mat-icon>
      </button>
      <button mat-mini-fab class="mat-tertiary">
        <mat-icon> dark_mode</mat-icon>
      </button>
      <mat-icon class="mat-error">light_mode</mat-icon>
      <mat-form-field appearance="outline" subscriptSizing="dynamic" class="mat-xs">
        <mat-label>Email</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-form-field appearance="outline" subscriptSizing="dynamic" class="mat-small">
        <mat-label>Email</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-form-field appearance="outline" subscriptSizing="dynamic" class="mat-medium">
        <mat-label>Email</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-form-field appearance="outline" subscriptSizing="dynamic">
        <mat-label>Email</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Chips">
        <mat-chip-option selected class="mat-primary">Primary</mat-chip-option>
        <mat-chip-option selected>Secondary</mat-chip-option>
        <mat-chip-option selected class="mat-tertiary">Tertiary</mat-chip-option>
      </mat-chip-listbox>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
