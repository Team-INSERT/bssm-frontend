import { CalendarArrowDirectionType } from "../../types";

export default interface CalendarArrowIconProps
  extends React.SVGProps<SVGSVGElement> {
  direction: CalendarArrowDirectionType;
}
