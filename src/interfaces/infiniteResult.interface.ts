import { QueryStatus } from "react-query";
import { AxiosError } from "axios";
import IPostInfiniteList from "./postInfiniteList.interface";

export default interface IInfiniteResult {
  data: IPostInfiniteList[] | undefined;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetching: boolean;
  isFetchingNextPage: boolean;
  status: QueryStatus;
  error: AxiosError;
}
