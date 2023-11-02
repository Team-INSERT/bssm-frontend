import httpClient from "@/apis/httpClient";

export const getMeister = async () => {
  const { data } = await httpClient.meister.get();
  return data;
};

export const getMeisterRanking = async (grade: number) => {
  const { data } = await httpClient.ranking.getById({ params: { id: grade } });
  return data;
};

export const getMeisterDetail = async (student: string) => {
  const { data } = await httpClient.meister.getDetail({
    grade: student[0],
    classNo: student[1],
    studentNo: +(student[2] + student[3]),
    pw: "",
  });
  return data;
};
