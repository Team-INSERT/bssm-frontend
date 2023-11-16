import PLAN from "../constants/plan.constant";

const getPlanTypeByPlanName = (planType: string) => {
  switch (planType) {
    case PLAN.학급일정:
      return PLAN.CLASS;
    case PLAN.학년일정:
      return PLAN.GRADE;
    case PLAN.학교일정:
      return PLAN.SCHOOL;
    default:
      return planType;
  }
};

export default getPlanTypeByPlanName;
