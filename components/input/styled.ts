import styled from "styled-components";

export const classNames = {
  Focused: "focused",
  Hovered: "hovered",
  Filled: "filled",
  Error: "error",
  Pending: "pending",
} as const;

export const InputBox = styled.div`
  width: 100%;

  span {
    position: relative;
    height: 20px;
    background: transparent;
  }

  .input-container {
    position: relative;
    display: flex;
  }

  .input {
    border: none;
    outline: none;
    width: 100%;
    height: 32px;
    background: transparent;
    caret-color: var(--text-primary);
    color: transparent;
    margin: 4px;
    &::-ms-clear {
      display: none;
    }

    &__area {
      transition: 300ms ease-out;
      padding: 10px 14px;
      background: var(--fill-secondary);
      border-radius: 16px;
      min-height: 60px;
    }
    &__hint {
      color: var(--text-secondary);
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.5px;
      transition: 300ms ease-out;
      margin: 2px 4px 2px 6px;
    }
  }
  .suggestions {
    content: " ";
    height: 34px;
    gap: 6px;
    margin-top: 7px;
    display: flex;
    opacity: 0;
    pointer-events: none;

    &__item {
      box-shadow: 0px 2px 1px rgba(51, 20, 0, 0.04),
        0px 4px 8px rgba(51, 20, 0, 0.08);
      border-radius: 16px;
      letter-spacing: 0.03em;
      font-variation-settings: "wght" 700;
      padding: 4px 8px;
      height: 32px;
      background: var(--fill-secondary);
      color: var(--text-primary);
    }
  }

  &.${classNames.Filled} {
    .input {
      color: var(--text-primary);
    }
  }

  &.${classNames.Focused} {
    .input {
      &__area {
        background: transparent;
        box-shadow: inset 0 0 0 2px var(--border-focus);
      }
    }
    .suggestions {
      opacity: 1;
      pointer-events: all;
    }
  }

  &.${classNames.Error} {
    .input {
      &__area {
        background: var(--fill-negative-bg);
        box-shadow: inset 0 0 0 1px var(--border-negative);
      }
      &__hint {
        color: var(--border-negative);
      }
    }
  }

  &.${classNames.Pending} {
    pointer-events: none;
    background: transparent;
    caret-color: #000;
    border: 0;
    outline: 0;
    .input {
      pointer-events: none;
    }
  }
`;
