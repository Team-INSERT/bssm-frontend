import React from "react";
import { timetableDefaultData } from "@/templates/meister/assets/data";
import { useTimetableListQuery } from "../services/query.service";

const useTimeTable = () => {
  const [dayTimeTable, setDayTimeTable] = React.useState(timetableDefaultData);
  const { data, isSuccess } = useTimetableListQuery();

  React.useEffect(() => {
    if (isSuccess) setDayTimeTable(data);
  }, [isSuccess, data]);

  return { dayTimeTable };
};

export default useTimeTable;
