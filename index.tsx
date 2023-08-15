import type { FC } from "react";
import SwapIcon from "./icons/swap";

export const Test: FC<{ value?: string }> = ({ value }) => (
  <div>
    <SwapIcon />
    <p>Test: {value}</p>
  </div>
);
