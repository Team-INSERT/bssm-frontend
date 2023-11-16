import { color } from "@/styles";

const getColorByDayName = (weekday: string) => {
  switch (weekday) {
    case "토":
      return color.primary_blue;
    case "일":
      return color.primary_red;
    default:
      return color.gray;
  }
};

export default getColorByDayName;
