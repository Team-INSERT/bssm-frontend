import httpClient from "@/_apis/httpClient";

export const getTimetable = async (timetableType: "bar" | "table") => {
  const { data } = await httpClient.timetable.getById({
    params: { id: timetableType },
  });
  return data;
};
