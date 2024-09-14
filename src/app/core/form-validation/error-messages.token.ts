import { InjectionToken } from "@angular/core";
import { ErrorMessages } from "./types";

export const DEFAULT_ERROR_MESSAGES: ErrorMessages = {
  required: () => "This field is required!",
  email: () => "Please provide a valid email address!",
  minlength: ({ requiredLength, actualLength }) =>
    `Please enter at least ${requiredLength} characters (you have entered ${actualLength})!`,
  maxlength: ({ requiredLength, actualLength }) =>
    `Please enter no more than ${requiredLength} characters (you have entered ${actualLength})!`,
  min: ({ min }) => `The value must be ${min} or greater!`,
  max: ({ max }) => `The value must be ${max} or less!`,
};

export const ERROR_MESSAGES = new InjectionToken("FORM_VALIDATION_ERROR_MESSAGES", {
  providedIn: "root",
  factory: () => DEFAULT_ERROR_MESSAGES,
});
