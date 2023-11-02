import { KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { searchStudentNumberStore } from "@/store/searchStudentNumber.store";
import { getMeister, getMeisterDetail, getMeisterRanking } from "./api.service";

export const useMeisterQuery = () => {
  const { data, ...queryRest } = useQuery([KEY.MEISTER], async () =>
    getMeister(),
  );
  return { data, ...queryRest };
};

interface IUseMeisterRankingQueryProps {
  grade: number;
}

export const useMeisterRankingQuery = ({
  grade,
}: IUseMeisterRankingQueryProps) => {
  const { data, ...queryRest } = useQuery([KEY.RANKING], async () =>
    getMeisterRanking(grade),
  );
  return { data, ...queryRest };
};

export const useMeisterDetailQuery = () => {
  const student = useRecoilValue(searchStudentNumberStore);
  const { data, ...queryRest } = useQuery([KEY.MEISTER_DETAIL], async () =>
    getMeisterDetail(student),
  );
  return { data, ...queryRest };
};
