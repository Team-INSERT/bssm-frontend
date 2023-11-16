import { css } from "styled-components";
import { color } from "@/styles";
import PLAN from "../constants/plan.constant";

const getColorByPlanType = (planType: string) => {
  switch (planType) {
    case PLAN.CLASS:
      return css`
        background-color: ${color.primary_blue};
      `;
    case PLAN.GRADE:
      return css`
        background-color: ${color.primary_yellow};
      `;
    case PLAN.SCHOOL:
      return css`
        background-color: ${color.primary_red};
      `;
    default:
      return css`
        background-color: ${color.primary_mint};
      `;
  }
};

export default getColorByPlanType;
