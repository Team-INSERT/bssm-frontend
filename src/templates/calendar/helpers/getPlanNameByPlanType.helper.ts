import { PLAN } from "../constants";

const getPlanNameByPlanType = (planType: string) => {
  switch (planType) {
    case PLAN.CLASS:
      return PLAN.학급일정;
    case PLAN.GRADE:
      return PLAN.학년일정;
    case PLAN.SCHOOL:
      return PLAN.학교일정;
    default:
      return planType;
  }
};

export default getPlanNameByPlanType;
