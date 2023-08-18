import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  CardDescription,
  CardHeading,
  CardIcon,
  CardRow,
  CardRowDescription,
  CardRowLeft,
  CardRowRight,
  CardRowTitle,
  CardStoryWrapper,
  CardStyled,
} from "../../components/card/card.styled";
import Card from "../../components/card/card";

const meta = {
  title: "Card",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const title = "Title";
const underTitle = "Description";
const value = "Value";
const underValue = "Description";

export const Common: Story = {
  render: () => {
    return (
      <CardStoryWrapper>
        <CardStyled>
          <CardRow>
            <CardRowLeft>
              <div>
                <CardRowTitle>{title}</CardRowTitle>
                <CardRowDescription>{underTitle}</CardRowDescription>
              </div>
            </CardRowLeft>
            <CardRowRight>
              <CardRowTitle>{value}</CardRowTitle>
              <CardRowDescription>{underValue}</CardRowDescription>
            </CardRowRight>
          </CardRow>
        </CardStyled>

        <CardStyled className="secondary">
          <CardRow>
            <CardRowLeft>
              <div>
                <CardRowTitle>{title}</CardRowTitle>
                <CardRowDescription>{underTitle}</CardRowDescription>
              </div>
            </CardRowLeft>
            <CardRowRight>
              <CardRowTitle>{value}</CardRowTitle>
              <CardRowDescription>{underValue}</CardRowDescription>
            </CardRowRight>
          </CardRow>
        </CardStyled>

        <CardStyled>
          <CardRow>
            <CardRowLeft>
              <CardIcon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: "invert(var(--svg-invert))" }}
                >
                  <g clip-path="url(#clip0_12_2206)">
                    <mask
                      id="mask0_12_2206"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path
                        opacity="0.8"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 17L6 21H8L12 17L10.5 15.5L8 18V3H6V18L3.5 15.5L2 17Z"
                        fill="black"
                      />
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3L12 7L13.5 8.5L16 6L16 21H18L18 6L20.5 8.5L22 7L18 3H16Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0_12_2206)">
                      <rect width="24" height="24" fill="black" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_12_2206">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </CardIcon>
              <div>
                <CardRowTitle>{title}</CardRowTitle>
                <CardRowDescription>{underTitle}</CardRowDescription>
              </div>
            </CardRowLeft>
            <CardRowRight>
              <CardRowTitle>{value}</CardRowTitle>
              <CardRowDescription>{underValue}</CardRowDescription>
            </CardRowRight>
          </CardRow>
        </CardStyled>

        <CardStyled className="secondary">
          <CardRow>
            <CardRowLeft>
              <CardIcon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: "invert(var(--svg-invert))" }}
                >
                  <g clip-path="url(#clip0_12_2206)">
                    <mask
                      id="mask0_12_2206"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path
                        opacity="0.8"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 17L6 21H8L12 17L10.5 15.5L8 18V3H6V18L3.5 15.5L2 17Z"
                        fill="black"
                      />
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3L12 7L13.5 8.5L16 6L16 21H18L18 6L20.5 8.5L22 7L18 3H16Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0_12_2206)">
                      <rect width="24" height="24" fill="black" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_12_2206">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </CardIcon>
              <div>
                <CardRowTitle>{title}</CardRowTitle>
                <CardRowDescription>{underTitle}</CardRowDescription>
              </div>
            </CardRowLeft>
            <CardRowRight>
              <CardRowTitle>{value}</CardRowTitle>
              <CardRowDescription>{underValue}</CardRowDescription>
            </CardRowRight>
          </CardRow>
        </CardStyled>

        <CardStyled className="md">
          <CardHeading>Heading</CardHeading>
          <CardRow>
            <CardRowLeft>
              <CardIcon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: "invert(var(--svg-invert))" }}
                >
                  <g clip-path="url(#clip0_12_2206)">
                    <mask
                      id="mask0_12_2206"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path
                        opacity="0.8"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 17L6 21H8L12 17L10.5 15.5L8 18V3H6V18L3.5 15.5L2 17Z"
                        fill="black"
                      />
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3L12 7L13.5 8.5L16 6L16 21H18L18 6L20.5 8.5L22 7L18 3H16Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0_12_2206)">
                      <rect width="24" height="24" fill="black" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_12_2206">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </CardIcon>
              <div>
                <CardRowTitle>{title}</CardRowTitle>
                <CardRowDescription>{underTitle}</CardRowDescription>
              </div>
            </CardRowLeft>
            <CardRowRight>
              <CardRowTitle>{value}</CardRowTitle>
              <CardRowDescription>{underValue}</CardRowDescription>
            </CardRowRight>
          </CardRow>
        </CardStyled>

        <CardStyled className="md secondary">
          <CardHeading>Heading</CardHeading>
          <CardRow>
            <CardRowLeft>
              <CardIcon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: "invert(var(--svg-invert))" }}
                >
                  <g clip-path="url(#clip0_12_2206)">
                    <mask
                      id="mask0_12_2206"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path
                        opacity="0.8"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 17L6 21H8L12 17L10.5 15.5L8 18V3H6V18L3.5 15.5L2 17Z"
                        fill="black"
                      />
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3L12 7L13.5 8.5L16 6L16 21H18L18 6L20.5 8.5L22 7L18 3H16Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0_12_2206)">
                      <rect width="24" height="24" fill="black" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_12_2206">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </CardIcon>
              <div>
                <CardRowTitle>{title}</CardRowTitle>
                <CardRowDescription>{underTitle}</CardRowDescription>
              </div>
            </CardRowLeft>
            <CardRowRight>
              <CardRowTitle>{value}</CardRowTitle>
              <CardRowDescription>{underValue}</CardRowDescription>
            </CardRowRight>
          </CardRow>
        </CardStyled>

        <CardStyled className="lg">
          <CardHeading>Heading</CardHeading>
          <CardDescription>Description.</CardDescription>
          <CardRow>
            <CardRowLeft>
              <CardIcon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: "invert(var(--svg-invert))" }}
                >
                  <g clip-path="url(#clip0_12_2206)">
                    <mask
                      id="mask0_12_2206"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path
                        opacity="0.8"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 17L6 21H8L12 17L10.5 15.5L8 18V3H6V18L3.5 15.5L2 17Z"
                        fill="black"
                      />
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3L12 7L13.5 8.5L16 6L16 21H18L18 6L20.5 8.5L22 7L18 3H16Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0_12_2206)">
                      <rect width="24" height="24" fill="black" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_12_2206">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </CardIcon>
              <div>
                <CardRowTitle>{title}</CardRowTitle>
                <CardRowDescription>{underTitle}</CardRowDescription>
              </div>
            </CardRowLeft>
            <CardRowRight>
              <CardRowTitle>{value}</CardRowTitle>
              <CardRowDescription>{underValue}</CardRowDescription>
            </CardRowRight>
          </CardRow>
        </CardStyled>

        <CardStyled className="lg secondary">
          <CardHeading>Heading</CardHeading>
          <CardDescription>Description.</CardDescription>
          <CardRow>
            <CardRowLeft>
              <CardIcon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: "invert(var(--svg-invert))" }}
                >
                  <g clip-path="url(#clip0_12_2206)">
                    <mask
                      id="mask0_12_2206"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path
                        opacity="0.8"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 17L6 21H8L12 17L10.5 15.5L8 18V3H6V18L3.5 15.5L2 17Z"
                        fill="black"
                      />
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3L12 7L13.5 8.5L16 6L16 21H18L18 6L20.5 8.5L22 7L18 3H16Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0_12_2206)">
                      <rect width="24" height="24" fill="black" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_12_2206">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </CardIcon>
              <div>
                <CardRowTitle>{title}</CardRowTitle>
                <CardRowDescription>{underTitle}</CardRowDescription>
              </div>
            </CardRowLeft>
            <CardRowRight>
              <CardRowTitle>{value}</CardRowTitle>
              <CardRowDescription>{underValue}</CardRowDescription>
            </CardRowRight>
          </CardRow>
        </CardStyled>
      </CardStoryWrapper>
    );
  },
};
