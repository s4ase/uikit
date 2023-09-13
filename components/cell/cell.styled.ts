import styled, { keyframes } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/theme";


export const CellWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  gap: ${cssVar("--spacing-space-8")};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.16px;
  width: 100%;

  .cell {
    &__info {
        display: flex; 
        flex-direction: column;
        gap: 2px;
    }
    &__secondary {
        color: ${cssVar("--text-secondary")};
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: normal
    }
    &__left {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    &__right {
        text-align: right;
    }
}


&.${Class.Caption} {
    .cell {
        &__info {
            flex-direction: column-reverse;
        }
    }
}
`;

export const CellLeft = styled.div`
  display: inline-flex;
  gap: 16px;
    `