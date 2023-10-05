import httpClient from "@/apis/httpClient";

export const getMeister = async () => {
  const { data } = await httpClient.meister.get();
  return data;
};

export const getMeisterRanking = async (grade: number) => {
  const { data } = await httpClient.ranking.getById({ params: { id: grade } });
  return data;
};

export const getMeisterDetail = async () => {
  const { data } = await httpClient.meister.getDetail({
    grade: 2,
    classNo: 3,
    studentNo: 1,
    pw: "",
  });
  return data;
};
