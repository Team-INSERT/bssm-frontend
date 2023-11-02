import dayjs from "dayjs";

const useMeal = () => {
  const getMealTime = () => {
    const now = dayjs();
    const dinnerTime = now.add(1, "hour").add(20, "minute");
    const morningTime = now.add(7, "hour");
    const lunchTime = now.add(8, "hour");

    if (now.isAfter(dinnerTime)) return "DINNER";
    if (now.isAfter(morningTime)) return "MORNING";
    if (now.isAfter(lunchTime)) return "LUNCH";
    return "MORNING";
  };

  return {
    getMealTime,
  };
};

export default useMeal;
