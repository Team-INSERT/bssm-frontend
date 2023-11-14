import { MealArrowDirectionType } from "../../types";

export default interface MealArrowIconProps
  extends React.SVGProps<SVGSVGElement> {
  direction: MealArrowDirectionType;
}
