import DATE from "@/constants/date.constant";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import useUser from "@/hooks/useUser";
import { BER } from "../constants";
import { useDeleteReserveMutation } from "../services/mutation.service";
import { berReserveData } from "../assets/data";
import { useReserveListQuery } from "../services/query.service";
import { BerReserveQuery } from "../interfaces";

const useBer = () => {
  const paramsDate = useSearchParams().get("date");
  const currentDate = dayjs().format(DATE.YYYYMMDD);
  const [date, setDate] = React.useState(paramsDate || currentDate);

  const [currentRoom, setCurrentRoom] = useState(0);
  const [berViewType, setBerViewType] = React.useState<string>(BER.신청하기);
  const { user } = useUser();
  const [reserve, setReserve] = React.useState<BerReserveQuery>(berReserveData);
  const { reserveList, isSuccess, refetch } = useReserveListQuery(date);

  const { mutate: deleteMutate } = useDeleteReserveMutation();

  const isBerReserverSameAsUser = (id: number) => {
    return user.id === id;
  };

  const handleSetDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleBerReserveDeleteClick = (id: number) => {
    deleteMutate(id);
  };

  const handleRoomButtonClick = (roomNumber: number) => {
    if (!reserve.reservedBerNumber.includes(roomNumber)) {
      setCurrentRoom(roomNumber);
    }
  };

  React.useEffect(() => {
    refetch();
  }, [date, refetch]);

  React.useEffect(() => {
    if (isSuccess) setReserve(reserveList);
  }, [reserveList, isSuccess]);

  return {
    date,
    reserve,
    berViewType,
    currentRoom,
    setCurrentRoom,
    setBerViewType,
    isBerReserverSameAsUser,
    handleSetDateChange,
    handleRoomButtonClick,
    handleBerReserveDeleteClick,
  };
};

export default useBer;
