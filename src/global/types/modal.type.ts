import { ReactNode } from "react";

export interface IModalState {
  component: ReactNode;
  visible?: boolean;
  menualClose?: boolean;
  onClose?: () => void;
}
