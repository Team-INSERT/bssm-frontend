import dayjs from "dayjs";

const getCurrentMeal = () => {
  const currentTime = dayjs().format("HH:mm");
  let mealTime;

  switch (true) {
    case currentTime >= "02:00" && currentTime < "08:00":
      mealTime = "MORNING";
      break;
    case currentTime >= "08:00" && currentTime < "13:00":
      mealTime = "LUNCH";
      break;
    default:
      mealTime = "DINNER";
  }

  return mealTime;
};
export default getCurrentMeal;
