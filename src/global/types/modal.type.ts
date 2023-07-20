import { ReactNode } from "react";

export interface ModalStore {
  title?: string;
  content: ReactNode;
  visible?: boolean;
  menualClose?: boolean;
  onClose?: () => void;
}
