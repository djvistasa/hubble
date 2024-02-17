import { Icons } from "@assets/index";

type FormFieldType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "time"
  | "checkbox"
  | "select"
  | "radio"
  | "textarea"
  | "password"
  | "phoneNumber";

type IconType = keyof typeof Icons;

export type { FormFieldType, IconType };
