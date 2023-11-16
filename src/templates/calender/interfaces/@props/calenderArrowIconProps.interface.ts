import { CalenderArrowDirectionType } from "../../types";

export default interface CalenderArrowIconProps
  extends React.SVGProps<SVGSVGElement> {
  direction: CalenderArrowDirectionType;
}
