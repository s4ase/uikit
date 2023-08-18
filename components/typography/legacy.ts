import styled, { css } from "styled-components";

import type { TypographyVariant } from "./types";

type Props = {
  bold?: boolean;
  gray?: boolean;
  error?: boolean;
  variant?: TypographyVariant;
  as?: string;
};

const typographyTags = {
  "": undefined,
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
} as const;

const COMMON_STYLES = css`
  margin: 0;
  font-family: var(--default-font) sans-serif;
  color: var(--text-primary);
`;

const BOLD_STYLES = css`
  font-weight: 700;
`;

const GRAY_STYLES = css`
  color: var(--text-tertiary);
`;

const ERROR_STYLES = css`
  color: var(--text-negative);
`;

const VARIANTS = {
  h1: {
    fontSize: "28px",
    fontWeight: "900",
    lineHeight: "34px",
    mobileFontSize: "18px",
    mobileFontWeight: "900",
    mobileLineHeigth: "20px",
  },
  h2: {
    fontSize: "24px",
    fontWeight: "900",
    lineHeight: "30px",
    mobileFontSize: "16px",
    mobileFontWeight: "900",
    mobileLineHeigth: "18px",
  },
  h3: {
    fontSize: "20px",
    fontWeight: "900",
    lineHeight: "26px",
    mobileFontSize: "14px",
    mobileFontWeight: "900",
    mobileLineHeigth: "16px",
  },
  h4: {
    fontSize: "16px",
    fontWeight: "900",
    lineHeight: "22px",
    mobileFontSize: "13px",
    mobileFontWeight: "900",
    mobileLineHeigth: "14px",
  },
  "p-xxl": {
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "28px",
    mobileFontSize: "18px",
    mobileFontWeight: "400",
    mobileLineHeigth: "21px",
  },
  "p-xl": {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "24px",
    mobileFontSize: "16px",
    mobileFontWeight: "400",
    mobileLineHeigth: "19px",
  },
  "p-lg": {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    mobileFontSize: "13px",
    mobileFontWeight: "400",
    mobileLineHeigth: "16px",
  },
  "p-md": {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    mobileFontSize: "12px",
    mobileFontWeight: "400",
    mobileLineHeigth: "15px",
  },
  "p-sm": {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "18px",
    mobileFontSize: "10px",
    mobileFontWeight: "400",
    mobileLineHeigth: "13px",
  },
  "p-xs": {
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "18px",
    mobileFontSize: "8px",
    mobileFontWeight: "400",
    mobileLineHeigth: "11px",
  },
  "button-lg": {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "22px",
  },
  "button-md": {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "22px",
  },
  "button-sm": {
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "22px",
  },
  "link-lg": {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "24px",
    textDecorationLine: "underline",
  },
  "link-md": {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "22px",
    textDecorationLine: "underline",
  },
  "link-sm": {
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "20px",
    textDecorationLine: "underline",
  },
  "": undefined,
} as const;

export const VARIANT_KEYS = Object.keys(
  VARIANTS,
) as unknown as keyof typeof VARIANTS;

type Breakpoint = "sm" | "md" | "lg";

const breakpoints = {
  sm: "500px",
  md: "700px",
  lg: "1200px",

  down(b: Breakpoint) {
    return `@media (max-width: ${this[b]})`;
  },

  up(b: Breakpoint) {
    return `@media (min-width: ${this[b]})`;
  },
} as const;

/** @deprecated todo rework typography */
export const T = styled.span.attrs<Props>(({ as, variant }) => {
  const tagName = variant?.split("-")?.[0] as keyof typeof typographyTags;
  const asFromVariant = typographyTags[tagName ?? ""];

  return {
    as: as ?? asFromVariant ?? "span",
  };
})<Props>`
  ${({ bold, gray, error, variant = "p-md" }) => {
    return css`
      ${COMMON_STYLES};
      font-weight: ${VARIANTS[variant]?.fontWeight ?? "500"};
      font-size: ${VARIANTS[variant]?.fontSize ?? "22px"};
      line-height: ${VARIANTS[variant]?.lineHeight ?? "26px"};

      text-decoration-line: ${
        // @ts-expect-error
        VARIANTS[variant]?.textDecorationLine ?? "unset"
      };

      ${() => breakpoints.down?.("sm")} {
        ${
          // @ts-expect-error
          VARIANTS[variant]?.mobileFontWeight
            ? // @ts-expect-error
              `font-weight: ${VARIANTS[variant]?.mobileFontWeight};`
            : ""
        }
        ${
          // @ts-expect-error
          VARIANTS[variant]?.mobileFontSize
            ? // @ts-expect-error
              `font-size: ${VARIANTS[variant]?.mobileFontSize};`
            : ""
        }
         ${
          // @ts-expect-error
          VARIANTS[variant]?.mobileLineHeigth
            ? // @ts-expect-error
              `line-height: ${VARIANTS[variant]?.mobileLineHeigth};`
            : ""
        }
      }

      ${() => (bold ? BOLD_STYLES : "")}
      ${() => (gray ? GRAY_STYLES : "")}
      ${() => (error ? ERROR_STYLES : "")}
    `;
  }}
`;
