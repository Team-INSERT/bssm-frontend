const getPlanType = (plan: string) => {
  switch (plan) {
    case "CLASS":
      return "학급 일정";
    case "GRADE":
      return "학년 일정";
    case "SCHOOL":
      return "학교 일정";
    default:
      return plan;
  }
};

export default getPlanType;
