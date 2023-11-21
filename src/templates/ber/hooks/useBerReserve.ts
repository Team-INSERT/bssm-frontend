import React from "react";
import { toast } from "react-toastify";
import { useCreateReserveMutation } from "../services/mutation.service";
import { BerReserveJoinHookProps } from "../types/@props";

const useBerReserve = ({
  date,
  currentRoom,
  setCurrentRoom,
}: BerReserveJoinHookProps) => {
  const [studentList, setStudentList] = React.useState<Array<string>>([]);
  const [studentInput, setStudentInput] = React.useState("");
  const [isAgreeRule, setIsAgreeRule] = React.useState(false);
  const { mutate: berReserveMutate } = useCreateReserveMutation();

  const handleChangeIsAgreeClick = () => {
    setIsAgreeRule((prev) => !prev);
  };

  const handleStudentDeleteClick = (student: string) => {
    setStudentList(studentList.filter((x) => x !== student));
  };

  const handleStudentInputChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      if (!studentInput.replace(/ /gi, "")) return;
      if (studentList.includes(studentInput)) return;
      setStudentInput("");
      setStudentList(studentList.concat(studentInput));
    }
  };

  const handleCreateReserveClick = () => {
    if (!currentRoom) return toast.error("베르실을 선택해주세요.");
    if (!isAgreeRule) return toast.error("숙지 사항에 동의해주세요.");

    berReserveMutate({
      berNumber: currentRoom,
      reservationTime: date,
      reservationUsersName: studentList.join(", "),
    });
    setStudentList([]);
    setCurrentRoom(0);
  };

  return {
    isAgreeRule,
    studentList,
    studentInput,
    setStudentInput,
    setStudentList,
    handleChangeIsAgreeClick,
    handleStudentDeleteClick,
    handleStudentInputChange,
    handleCreateReserveClick,
  };
};

export default useBerReserve;
