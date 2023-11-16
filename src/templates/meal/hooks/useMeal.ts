import dayjs from "dayjs";
import React from "react";
import "dayjs/locale/ko";
import DATE from "@/constants/date.constant";
import { MEAL } from "../constants";
import { ChangeDateType } from "../types";

const useMeal = () => {
  const nowDate = dayjs().format(DATE.YYYYMMDD);
  const [currentDate, setCurrentDate] = React.useState(nowDate);

  const getWeekday = (date: string) => {
    const weekday = dayjs(date, DATE.YYYYMMDD).format(DATE.WEEKDAY);
    return weekday.toUpperCase();
  };

  const replaceBrToLine = (content: string) => {
    return content.replaceAll("<br/>", "\n");
  };

  const get식사명ByMealName = (mealName: string) => {
    switch (mealName) {
      case MEAL.BREAKFAST:
        return "조식";
      case MEAL.LUNCH:
        return "중식";
      case MEAL.DINNER:
        return "석식";
      default:
        return mealName;
    }
  };

  const formatDate = (date: string) => {
    return dayjs(date, DATE.YYYYMMDD).locale("ko").format(DATE.DETAIL);
  };

  const handleCurrentDateChange = (operator: ChangeDateType) => {
    setCurrentDate((prevDate) => {
      const increaseDay = getWeekday(prevDate) === DATE.FRI ? 3 : 1;
      const decreaseDay = getWeekday(prevDate) === DATE.MON ? -3 : -1;

      const dayCount = operator === DATE.INCREASE ? increaseDay : decreaseDay;
      const count = dayjs(prevDate, DATE.YYYYMMDD).add(dayCount, DATE.DAY);
      return count.format(DATE.YYYYMMDD);
    });
  };

  React.useEffect(() => {
    const handleMealDateKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handleCurrentDateChange(DATE.DECREASE);
      if (e.key === "ArrowRight") handleCurrentDateChange(DATE.INCREASE);
    };

    window.addEventListener("keydown", handleMealDateKeyDown);
    return () => window.removeEventListener("keydown", handleMealDateKeyDown);
    // eslint-disable-next-line
  }, []);

  return {
    currentDate,
    formatDate,
    get식사명ByMealName,
    handleCurrentDateChange,
    replaceBrToLine,
  };
};

export default useMeal;
