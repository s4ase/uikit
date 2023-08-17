import { styled } from "styled-components";

const StoryWrapper = styled.div`
  position: relative;
  padding: 8px;

  &.container,
  .container {
    &-col {
      display: flex;
      flex-flow: column nowrap;
    }

    &-row {
      display: flex;
      flex-flow: row nowrap;
    }
  }

  .story-item {
    margin-bottom: 96px;
    width: 96px;
    height: 96px;
    background: #ccc;

    &.blank {
      background: transparent;
    }

    > div {
      width: 80px;
      height: 80px;
      margin: 8px;
      border-radius: 50%;

      &.opaque-blue {
        background: var(--color-opaque-blue);
      }
      &.opaque-red3 {
        background: var(--color-opaque-red3);
      }
      &.opaque-red2 {
        background: var(--color-opaque-red2);
      }
      &.opaque-red1 {
        background: var(--color-opaque-red1);
      }
      &.opaque-green3 {
        background: var(--color-opaque-green3);
      }
      &.opaque-green2 {
        background: var(--color-opaque-green2);
      }
      &.opaque-green1 {
        background: var(--color-opaque-green1);
      }
      &.opaque-black {
        background: var(--color-opaque-black);
      }
      &.opaque-gray8 {
        background: var(--color-opaque-gray8);
      }
      &.opaque-gray7 {
        background: var(--color-opaque-gray7);
      }
      &.opaque-gray6 {
        background: var(--color-opaque-gray6);
      }
      &.opaque-gray5 {
        background: var(--color-opaque-gray5);
      }
      &.opaque-gray4 {
        background: var(--color-opaque-gray4);
      }
      &.opaque-gray3 {
        background: var(--color-opaque-gray3);
      }
      &.opaque-gray2 {
        background: var(--color-opaque-gray2);
      }
      &.opaque-gray1 {
        background: var(--color-opaque-gray1);
      }
      &.opaque-white {
        background: var(--color-opaque-white);
      }

      &.transparent-blue {
        background: var(--color-transparent-blue);
      }
      &.transparent-red3 {
        background: var(--color-transparent-red3);
      }
      &.transparent-red2 {
        background: var(--color-transparent-red2);
      }
      &.transparent-red1 {
        background: var(--color-transparent-red1);
      }
      &.transparent-green3 {
        background: var(--color-transparent-green3);
      }
      &.transparent-green2 {
        background: var(--color-transparent-green2);
      }
      &.transparent-green1 {
        background: var(--color-transparent-green1);
      }
      &.transparent-gray8 {
        background: var(--color-transparent-gray8);
      }
      &.transparent-gray7 {
        background: var(--color-transparent-gray7);
      }
      &.transparent-gray6 {
        background: var(--color-transparent-gray6);
      }
      &.transparent-gray5 {
        background: var(--color-transparent-gray5);
      }
      &.transparent-gray4 {
        background: var(--color-transparent-gray4);
      }
      &.transparent-gray3 {
        background: var(--color-transparent-gray3);
      }
      &.transparent-gray2 {
        background: var(--color-transparent-gray2);
      }
      &.transparent-gray1 {
        background: var(--color-transparent-gray1);
      }
    }
  }
`;

export default StoryWrapper;
