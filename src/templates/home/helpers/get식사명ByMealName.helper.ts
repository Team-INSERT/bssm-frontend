const get식사명ByMealName = (mealName: string) => {
  switch (mealName) {
    case "MORNING":
      return "조식";
    case "LUNCH":
      return "중식";
    case "DINNER":
      return "석식";
    default:
      return mealName;
  }
};

export default get식사명ByMealName;
