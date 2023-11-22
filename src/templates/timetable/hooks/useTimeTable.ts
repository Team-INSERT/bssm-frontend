import React from "react";
import { useTimetableListQuery } from "../services/query.service";
import { defaultTimeTableData } from "../assets/data";

const useTimeTable = () => {
  const [dayTimeTable, setDayTimeTable] = React.useState(defaultTimeTableData);
  const { data, isSuccess } = useTimetableListQuery();

  React.useEffect(() => {
    if (isSuccess) setDayTimeTable(data);
  }, [isSuccess, data]);

  return { dayTimeTable };
};

export default useTimeTable;
