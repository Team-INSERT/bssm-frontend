import { ReactNode } from "react";

interface FlexPropsType {
  children: ReactNode;
  gap?: string;
  justifyContent?:
    | "none"
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between";
  alignItems?: "none" | "center" | "flex-end" | "flex-start" | "space-between";
  width?: string;
  height?: string;
}

export default FlexPropsType;
