import DATE from "@/constants/date.constant";
import dayjs from "dayjs";
import React from "react";
import useModal from "@/hooks/useModal";
import useUser from "@/hooks/useUser";
import { toast } from "react-toastify";
import {
  useAddCalendarPlanMutation,
  useDeleteCalendarPlanMutation,
} from "../services/mutation.service";
import { ChangeDateType } from "../types";
import { CalendarPlanAddQuery } from "../interfaces";
import { getPlanTypeByPlanName } from "../helpers";
import CalendarPlanAddModal from "../layouts/CalendarPlanAddModal";

const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = React.useState(dayjs().month());
  const { openModal } = useModal();
  const { user } = useUser();
  const { mutate: deleteMutate } = useDeleteCalendarPlanMutation();
  const { mutate: addPlanMutate } = useAddCalendarPlanMutation();

  const isPlanWriterSameAsUser = (id: number) => {
    return user.id === id;
  };

  const handleOpenModalClick = (date?: string) => {
    if (date) {
      openModal({
        component: <CalendarPlanAddModal date={date} />,
      });
    }
  };

  const handlePlanAddButtonClick = ({
    title,
    date,
    planType,
  }: CalendarPlanAddQuery) => {
    if (!title.trim()) return toast.error("내용을 입력해주세요!");
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

  const handleDeleteCalendarPlanClick = (id: number) => {
    deleteMutate(id);
  };

  const handleCalendarMonthChange = (month: ChangeDateType) => {
    if (month === DATE.INCREASE) {
      setCurrentMonth((prevMon) => (prevMon !== 12 ? prevMon + 1 : prevMon));
    }
    if (month === DATE.DECREASE) {
      setCurrentMonth((prevMon) => (prevMon !== 1 ? prevMon - 1 : prevMon));
    }
  };

  React.useEffect(() => {
    const handleSetDateKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handleCalendarMonthChange(DATE.DECREASE);
      if (e.key === "ArrowRight") handleCalendarMonthChange(DATE.INCREASE);
    };

    window.addEventListener("keydown", handleSetDateKeyDown);
    return () => window.removeEventListener("keydown", handleSetDateKeyDown);
  }, []);

  return {
    currentMonth,
    isPlanWriterSameAsUser,
    handleOpenModalClick,
    handlePlanAddButtonClick,
    handleDeleteCalendarPlanClick,
    handleCalendarMonthChange,
  };
};

export default useCalendar;
