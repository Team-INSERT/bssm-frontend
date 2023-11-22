import { theme } from "@/styles";
import { css } from "styled-components";

const getIfReservedRoomCSS = (isReserved?: boolean) => {
  if (isReserved) {
    return css`
      background-color: ${theme.on_tertiary};
      cursor: default;
      &:after {
        content: "예약중";
      }
    `;
  }
  return css`
    background-color: ${theme.white};
    color: ${theme.green};
    &:after {
      content: "예약 가능";
    }
  `;
};

export default getIfReservedRoomCSS;
