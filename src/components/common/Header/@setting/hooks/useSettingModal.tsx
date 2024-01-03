import { useState } from "react";

const useSettingModal = () => {
  const [isSettingModalOpen, setSettingModalOpen] = useState(false);

  const openSettingModal = () => {
    setSettingModalOpen(true);
  };

  const closeSettingModal = () => {
    setSettingModalOpen(false);
  };

  return {
    isSettingModalOpen,
    openSettingModal,
    closeSettingModal,
  };
};

export default useSettingModal;
