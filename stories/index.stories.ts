import type { Meta, StoryObj } from "@storybook/react";
// import { within, userEvent } from "@storybook/testing-library";

import { Test } from "..";

const meta = {
  title: "Example/Test",
  component: Test,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = { args: { value: "value1" } };
