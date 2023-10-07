import httpClient from "@/apis/httpClient";

export const getTimetable = async (timetableType: "bar" | "table") => {
  const { data } = await httpClient.timetable.getById({
    params: { id: timetableType },
  });
  return data;
};
