import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";
import * as Class from "../constants/classnames";
import LampIcon from "../icons/lamp";
import CheckmarkIcon from "../icons/checkmark";
import TransitionIcon from "../icons/transition";
import { CardStoryWrapper } from "../components/helpers/card-story-wrapper";
import { ThumbnailWrapper } from "../components/thumbnail/thumbnail.styled";
import { CellWrapper } from "../components/cell/cell.styled";
import { LabelItemHelper } from "./label.stories";

const meta = {
  title: "Components/Cell",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const icon = <LampIcon />;
const check = <CheckmarkIcon />;
const transition = <TransitionIcon />;

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
        {props.aside ? <>{props.aside}</> : 
        <>
        {props?.value}
        <div className="cell__secondary">
        {props?.underValue}
        </div>
        </>}
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

        <CellHelper icon={icon} title={title} underTitle={underTitle}  aside={<LabelItemHelper title="Label" className={cn(Class.M, Class.Accent)} />} />
        <CellHelper icon={icon} title={title} underTitle={underTitle}  aside={<LabelItemHelper title="Label" className={cn(Class.M, Class.Accent)} />} className={cn(Class.Caption)}  />
        <CellHelper icon={icon} title={title} aside={<LabelItemHelper title="Label" className={cn(Class.M, Class.Accent)} />} />

        <CellHelper icon={icon} title={title} underTitle={underTitle}  aside={check} />
        <CellHelper icon={icon} title={title} underTitle={underTitle}  aside={check} className={cn(Class.Caption)}  />
        <CellHelper icon={icon} title={title}  aside={check} />

        <CellHelper icon={icon} title={title} underTitle={underTitle}  aside={transition} />
        <CellHelper icon={icon} title={title} underTitle={underTitle}  aside={transition} className={cn(Class.Caption)}  />
        <CellHelper icon={icon} title={title}  aside={transition} />

      </CardStoryWrapper>
    );
  },
};
