import { theme } from "@/styles";
import { SCORE } from "../../constants";

const graphColorData = {
  [SCORE.AVG]: theme.primary_yellow,
  [SCORE.MY]: theme.primary_blue,
  [SCORE.MAX]: theme.primary_red,
};

export default graphColorData;
