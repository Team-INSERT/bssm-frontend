export default interface SVGAttribute
  extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  isPointable?: boolean;
  color?: string;
  direction?: "top" | "right" | "bottom" | "left";
}
