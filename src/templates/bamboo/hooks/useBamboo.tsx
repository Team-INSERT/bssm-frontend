import dayjs from "dayjs";
import { useModal } from "@/@modal/hooks";
import BambooCreateModal from "../layouts/BambooCreateModal";
import BambooManageModal from "../layouts/BambooManageModal";
import {
  useAllowBambooMutation,
  useCreateBambooMutation,
  useDeleteBambooMutation,
} from "../services/mutation.service";

const useBamboo = () => {
  const { openModal } = useModal();
  const { mutate: createMutate } = useCreateBambooMutation();
  const { mutate: deleteMutate } = useDeleteBambooMutation();
  const { mutate: acceptMutate } = useAllowBambooMutation();

  const formatCreatedDate = (date: string) => {
    return dayjs(date).locale("ko").format("YYYY.MM.DD. A hh:mm");
  };

  const handleOpenManageModalClick = () => {
    openModal({
      component: <BambooManageModal />,
    });
  };

  const handleOpenCreateModalClick = () => {
    openModal({
      component: <BambooCreateModal />,
    });
  };

  const handleDeleteButtonClick = (bambooId: number) => {
    deleteMutate(bambooId);
  };

  const handleAcceptButtonClick = (bambooId: number) => {
    acceptMutate(bambooId);
  };

  const handleCreateButtonClick = (content: string) => {
    createMutate(content);
  };

  return {
    formatCreatedDate,
    handleOpenManageModalClick,
    handleOpenCreateModalClick,
    handleCreateButtonClick,
    handleDeleteButtonClick,
    handleAcceptButtonClick,
  };
};

export default useBamboo;
