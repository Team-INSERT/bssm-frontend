import httpClient from "@/apis/httpClient";

export const getMealList = async (date: string) => {
  const { data } = await httpClient.meal.getById({ params: { id: date } });
  return data;
};
