import { InjectionToken } from "@angular/core";
import { FormErrorMessages } from "./types";

export const DEFAULT_FORM_ERROR_MESSAGES: FormErrorMessages = {
  required: () => "This field is required",
  email: () => "Please provide a valid email address",
  minlength: ({ requiredLength, actualLength }) =>
    `Minimum length is ${requiredLength} characters, you have entered ${actualLength}`,
  maxlength: ({ requiredLength, actualLength }) =>
    `Maximum length is ${requiredLength} characters, you have entered ${actualLength}`,
  min: ({ min }) => `The value must be ${min} or greater!`,
  max: ({ max }) => `The value must be ${max} or less!`,
};

export const FORM_ERROR_MESSAGES = new InjectionToken("FORM_ERROR_MESSAGES", {
  providedIn: "root",
  factory: () => DEFAULT_FORM_ERROR_MESSAGES,
});
