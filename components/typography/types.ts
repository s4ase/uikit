export type Sizes = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";

export type TypographySizes = Sizes;

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | `p-${TypographySizes}`
  | `button-${Extract<TypographySizes, "lg" | "md" | "sm">}`
  | `link-${Extract<TypographySizes, "lg" | "md" | "sm">}`;
