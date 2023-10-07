import { KEY } from "@/_constants";
import { useQuery } from "@tanstack/react-query";
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
  const { data, ...queryRest } = useQuery([KEY.MEISTER_DETAIL], async () =>
    getMeisterDetail(),
  );
  return { data, ...queryRest };
};
