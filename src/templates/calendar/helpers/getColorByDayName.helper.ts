import { theme } from "@/styles";

const getColorByDayName = (weekday: string) => {
  switch (weekday) {
    case "토":
      return theme.primary_blue;
    case "일":
      return theme.primary_red;
    default:
      return theme.gray;
  }
};

export default getColorByDayName;
