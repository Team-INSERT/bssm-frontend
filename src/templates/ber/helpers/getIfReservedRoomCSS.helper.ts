import { color } from "@/styles";
import { css } from "styled-components";

const getIfReservedRoomCSS = (isReserved?: boolean) => {
  if (isReserved) {
    return css`
      background-color: ${color.on_tertiary};
      cursor: default;
      &:after {
        content: "예약중";
      }
    `;
  }
  return css`
    background-color: ${color.white};
    color: ${color.green};
    &:after {
      content: "예약 가능";
    }
  `;
};

export default getIfReservedRoomCSS;
