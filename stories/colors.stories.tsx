import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import StoryWrapper from "../components/helpers/color-story-wrapper";
// import { within, userEvent } from "@storybook/testing-library";

const meta = {
  title: "Colors",
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  render: () => {
    return (
      <StoryWrapper className="container-col">
        <p className="title">Global</p>

        <div className="container-row">
          <div className="container-col margin-16px">
            <p className="subtitle">Opaque</p>

            <div className="story-item">
              <div className="opaque-blue"></div>
            </div>
            <div className="story-item">
              <div className="opaque-red3"></div>
            </div>
            <div className="story-item">
              <div className="opaque-red2"></div>
            </div>
            <div className="story-item">
              <div className="opaque-red1"></div>
            </div>
            <div className="story-item">
              <div className="opaque-green3"></div>
            </div>
            <div className="story-item">
              <div className="opaque-green2"></div>
            </div>
            <div className="story-item">
              <div className="opaque-green1"></div>
            </div>
            <div className="story-item">
              <div className="opaque-black"></div>
            </div>
            <div className="story-item">
              <div className="opaque-gray8"></div>
            </div>
            <div className="story-item">
              <div className="opaque-gray7"></div>
            </div>
            <div className="story-item">
              <div className="opaque-gray6"></div>
            </div>
            <div className="story-item">
              <div className="opaque-gray5"></div>
            </div>
            <div className="story-item">
              <div className="opaque-gray4"></div>
            </div>
            <div className="story-item">
              <div className="opaque-gray3"></div>
            </div>
            <div className="story-item">
              <div className="opaque-gray2"></div>
            </div>
            <div className="story-item">
              <div className="opaque-gray1"></div>
            </div>
            <div className="story-item">
              <div className="opaque-white"></div>
            </div>
          </div>

          <div className="container-col margin-16px">
            <p className="subtitle">Transparent</p>

            <div className="story-item">
              <div className="transparent-blue"></div>
            </div>
            <div className="story-item">
              <div className="transparent-red3"></div>
            </div>
            <div className="story-item">
              <div className="transparent-red2"></div>
            </div>
            <div className="story-item">
              <div className="transparent-red1"></div>
            </div>
            <div className="story-item">
              <div className="transparent-green3"></div>
            </div>
            <div className="story-item">
              <div className="transparent-green2"></div>
            </div>
            <div className="story-item">
              <div className="transparent-green1"></div>
            </div>
            <div className="story-item blank"></div>
            <div className="story-item">
              <div className="transparent-gray8"></div>
            </div>
            <div className="story-item">
              <div className="transparent-gray7"></div>
            </div>
            <div className="story-item">
              <div className="transparent-gray6"></div>
            </div>
            <div className="story-item">
              <div className="transparent-gray5"></div>
            </div>
            <div className="story-item">
              <div className="transparent-gray4"></div>
            </div>
            <div className="story-item">
              <div className="transparent-gray3"></div>
            </div>
            <div className="story-item">
              <div className="transparent-gray2"></div>
            </div>
            <div className="story-item">
              <div className="transparent-gray1"></div>
            </div>
            <div className="story-item blank"></div>
          </div>

          <div className="container-col margin-16px">
            <p className="subtitle">Transparent/Invert</p>

            <div className="story-item">
              <div className="transparent-invert-gray6"></div>
            </div>
            <div className="story-item">
              <div className="transparent-invert-gray5"></div>
            </div>
            <div className="story-item">
              <div className="transparent-invert-gray4"></div>
            </div>
            <div className="story-item">
              <div className="transparent-invert-gray2"></div>
            </div>
          </div>

          <div className="container-col margin-16px">
            <p className="subtitle">Accent/Opaque</p>

            <div className="story-item">
              <div className="accent-opaque5"></div>
            </div>
            <div className="story-item">
              <div className="accent-opaque4"></div>
            </div>
            <div className="story-item">
              <div className="accent-opaque3"></div>
            </div>
            <div className="story-item">
              <div className="accent-opaque2"></div>
            </div>
            <div className="story-item">
              <div className="accent-opaque1"></div>
            </div>
          </div>

          <div className="container-col margin-16px">
            <p className="subtitle">Accent/Transparent</p>

            <div className="story-item">
              <div className="accent-transparent5"></div>
            </div>
            <div className="story-item">
              <div className="accent-transparent4"></div>
            </div>
            <div className="story-item">
              <div className="accent-transparent3"></div>
            </div>
            <div className="story-item">
              <div className="accent-transparent2"></div>
            </div>
            <div className="story-item">
              <div className="accent-transparent1"></div>
            </div>
          </div>
        </div>
      </StoryWrapper>
    );
  },
};
