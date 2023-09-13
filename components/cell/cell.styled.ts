import styled, { keyframes } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/theme";


export const CellWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: space-between;
  flex-shrink: 0;
  gap: ${cssVar("--spacing-space-8")};

&.${Class.XL} {
    width: 96px;
    height: 96px;
    padding: ${cssVar("--spacing-space-24")};
    border-radius: ${cssVar("--rounding-radius-xxxl")};
}
`;
