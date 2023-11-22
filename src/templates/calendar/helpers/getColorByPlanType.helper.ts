import { css } from "styled-components";
import { theme } from "@/styles";
import { PLAN } from "../constants";

const getColorByPlanType = (planType: string) => {
  switch (planType) {
    case PLAN.CLASS:
      return css`
        background-color: ${theme.primary_blue};
      `;
    case PLAN.GRADE:
      return css`
        background-color: ${theme.primary_yellow};
      `;
    case PLAN.SCHOOL:
      return css`
        background-color: ${theme.primary_red};
      `;
    default:
      return css`
        background-color: ${theme.primary_mint};
      `;
  }
};

export default getColorByPlanType;
