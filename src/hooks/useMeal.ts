import dayjs from "dayjs";

const useMeal = () => {
  const getMealTime = () => {
    const now = dayjs();

    if (now.isAfter(13)) return "DINNER";
    if (now.isAfter(7)) return "LUNCH";
    if (now.isAfter(19)) return "MORNING";
    return "MORNING";
  };

  return {
    getMealTime,
  };
};

export default useMeal;
