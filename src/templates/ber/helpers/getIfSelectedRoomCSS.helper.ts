import { color } from "@/styles";
import { css } from "styled-components";

const getIfSelectedRoomCSS = (isClicked?: boolean) => {
  if (isClicked) {
    return css`
      background-color: ${color.primary_blue};
      color: ${color.white};
      &:after {
        content: "선택중";
      }
    `;
  }
};

export default getIfSelectedRoomCSS;
