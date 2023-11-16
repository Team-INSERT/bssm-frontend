import DATE from "@/constants/date.constant";
import dayjs from "dayjs";
import React from "react";
import useModal from "@/hooks/useModal";
import useUser from "@/hooks/useUser";
import { toast } from "react-toastify";
import {
  useAddCalenderPlanMutation,
  useDeleteCalenderPlanMutation,
} from "../services/mutation.service";
import CalenderPlanAddModal from "../layouts/CalenderPlanAddModal";
import { ChangeDateType } from "../types";
import { CalenderPlanAddQuery } from "../interfaces";
import { getPlanTypeByPlanName } from "../helpers";

const useCalender = () => {
  const [currentMonth, setCurrentMonth] = React.useState(dayjs().month());
  const { openModal } = useModal();
  const { user } = useUser();
  const { mutate: deleteMutate } = useDeleteCalenderPlanMutation();
  const { mutate: addPlanMutate } = useAddCalenderPlanMutation();

  const isPlanWriterIsUser = (id: number) => {
    return user.id === id;
  };

  const handleOpenModalClick = (date?: string) => {
    if (date) {
      openModal({
        component: <CalenderPlanAddModal date={date} />,
      });
    }
  };

  const handlePlanAddButtonClick = ({
    title,
    date,
    planType,
  }: CalenderPlanAddQuery) => {
    if (title.trim()) return toast.error("내용을 입력해주세요!");
    const { grade, classNum: classNumber } = user;
    const planQuery = {
      title,
      date,
      type: getPlanTypeByPlanName(planType),
      priority: 0,
      color: "#000",
      grade,
      classNumber,
    };
    addPlanMutate(planQuery);
  };

  const handleDeleteCalenderPlanClick = (id: number) => {
    deleteMutate(id);
  };

  const handleCalenderMonthChange = (month: ChangeDateType) => {
    if (month === DATE.INCREASE) {
      setCurrentMonth((prevMon) => (prevMon !== 12 ? prevMon + 1 : prevMon));
    }
    if (month === DATE.DECREASE) {
      setCurrentMonth((prevMon) => (prevMon !== 1 ? prevMon - 1 : prevMon));
    }
  };

  React.useEffect(() => {
    const handleSetDateKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handleCalenderMonthChange(DATE.DECREASE);
      if (e.key === "ArrowRight") handleCalenderMonthChange(DATE.INCREASE);
    };

    window.addEventListener("keydown", handleSetDateKeyDown);
    return () => window.removeEventListener("keydown", handleSetDateKeyDown);
  }, []);

  return {
    currentMonth,
    isPlanWriterIsUser,
    handleOpenModalClick,
    handlePlanAddButtonClick,
    handleDeleteCalenderPlanClick,
    handleCalenderMonthChange,
  };
};

export default useCalender;
