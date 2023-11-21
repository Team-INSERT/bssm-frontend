import httpClient from "@/apis/httpClient";

export const getTimetable = async () => {
  const { data } = await httpClient.timetable.getById({
    params: { id: "table" },
  });
  return data;
};
