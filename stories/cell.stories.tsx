import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";
import * as Class from "../constants/classnames";
import LampIcon from "../icons/lamp";
import Pattern from "../icons/pattern";
import LightPersonIcon from "../icons/person-light";
import { CardStoryWrapper } from "../components/helpers/card-story-wrapper";
import { ThumbnailWrapper } from "../components/thumbnail/thumbnail.styled";
import { CellWrapper } from "../components/cell/cell.styled";
import Noop from "../components/helpers/noop";

const meta = {
  title: "Components/Cell",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const icon = <LampIcon />;

interface ThumbnailProps  {
  icon?: ReactNode;
  className?: string;
}

interface CellProps  {
    icon?: ReactNode;
    className?: string;
    title?: ReactNode;
    underTitle?: ReactNode;
    value?: ReactNode;
    underValue?: ReactNode;

    aside?: ReactNode;
  }

const title = "Title";
const underTitle = "Description";
const value = "Value";
const underValue = "Description";
const heading = "Heading";
const mainDescription = "Description";

function ThumbnailHelper(props: ThumbnailProps) {
  return (
    <ThumbnailWrapper {...props} className={cn(Class.M)} >
        {props?.icon}
    </ThumbnailWrapper>
  );
}

function CellHelper(props: CellProps) {
    return (
      <CellWrapper className={props.className} >
        <div className="cell__left">
            <ThumbnailHelper icon={props.icon} />
            <div className="cell__info">
                {props?.title}
                <div className="cell__secondary">
                {props?.underTitle}
                </div>
            </div>
        </div>

       <div className="cell__info cell__right">
        {props?.value}
        <div className="cell__secondary">
        {props?.underValue}
        </div>
       </div>
      </CellWrapper>
    );
  }

export const Common: Story = {
  render: () => {
    return (
      <CardStoryWrapper>
        <CellHelper icon={icon} title={title} underTitle={underTitle} value={value} underValue={underValue} />
        <CellHelper icon={icon} title={title} underTitle={underTitle} value={value} underValue={underValue} className={cn(Class.Caption)} />
        <CellHelper icon={icon} title={title} value={value} />

        <CellHelper icon={icon} title={title} value={value} />

      </CardStoryWrapper>
    );
  },
};
