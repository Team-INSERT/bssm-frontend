import { theme } from "@/styles";

const getStatusColor = (index: number) => {
  if (!index) return theme.primary_yellow;
  if (index === 1) return theme.primary_blue;
  return theme.primary_red;
};

export default getStatusColor;
