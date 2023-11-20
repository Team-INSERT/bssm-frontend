import { HTMLAttributes, ReactNode } from "react";

interface FlexPropsType extends HTMLAttributes<HTMLElement> {
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
  as?: string;
}

export default FlexPropsType;
