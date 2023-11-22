import { CalendarArrowDirectionType } from "..";

export default interface CalendarArrowIconProps
  extends React.SVGProps<SVGSVGElement> {
  direction: CalendarArrowDirectionType;
}
