import { BambooManageModal } from "@/components/common";
import BambooCreateModal from "@/components/common/Modal/BambooCreateModal";
import { isAdmin } from "@/helpers";
import useModal from "@/hooks/useModal";
import useUser from "@/hooks/useUser";
import { useDeleteBambooMutation } from "../services/mutation.service";

const useBamboo = () => {
  const { user } = useUser();
  const { openModal } = useModal();
  const { mutate } = useDeleteBambooMutation();

  const handleManageButtonClick = () => {
    openModal({
      component: <BambooManageModal />,
    });
  };

  const handleCreateButtonClick = () => {
    openModal({
      component: <BambooCreateModal />,
    });
  };

  const handleDeleteButtonClick = (bambooId: number) => {
    mutate(bambooId);
  };

  return {
    handleManageButtonClick,
    handleCreateButtonClick,
    handleDeleteButtonClick,
    isAdmin: isAdmin(user.authority),
  };
};

export default useBamboo;
