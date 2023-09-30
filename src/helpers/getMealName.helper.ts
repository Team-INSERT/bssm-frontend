const getMealName = (meal: string) => {
  switch (meal) {
    case "MORNING":
      return "조식";
    case "LUNCH":
      return "중식";
    case "DINNER":
      return "석식";
    default:
      return meal;
  }
};

export default getMealName;
