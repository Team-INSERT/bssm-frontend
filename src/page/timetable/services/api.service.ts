import httpClient from "@/apis/httpClient";
import IGrade from "@/global/types/grade.type";

export const getTimetable = async ({ userGrade, userClass }: IGrade) => {
  const { data } = await httpClient.timetable.getTimetable({
    userGrade,
    userClass,
  });

  return data.timetableList;
};
