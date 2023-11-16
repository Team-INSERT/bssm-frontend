import dayjs from "dayjs";

const getPaddingDayOfMonth = (currentMonth: number) => {
  const dayOfWeek = dayjs().year(dayjs().year()).month(currentMonth).date(1);
  return Array.from({ length: dayOfWeek.day() });
};

export default getPaddingDayOfMonth;
