import { color } from "@/styles";

const getStatusColor = (index: number) => {
  if (!index) return color.primary_yellow;
  if (index === 1) return color.primary_blue;
  return color.primary_red;
};

export default getStatusColor;
