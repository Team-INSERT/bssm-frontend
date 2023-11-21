import { theme } from "@/styles";
import { css } from "styled-components";

const getIfSelectedRoomCSS = (isClicked?: boolean) => {
  if (isClicked) {
    return css`
      background-color: ${theme.primary_blue};
      color: ${theme.white};
      &:after {
        content: "선택중";
      }
    `;
  }
};

export default getIfSelectedRoomCSS;
