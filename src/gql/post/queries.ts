import { gql } from "@apollo/client";
import { PostCategoryType } from "@/types";
import { DEFAULT_POST, posts } from "./data";

interface IPostProps {
  type: PostCategoryType;
  page: number;
  size: string | number;
}

interface IPostQueryProps extends IPostProps {
  id: number;
}

interface IPostMutateProps extends IPostProps {
  data: unknown;
}

export const GET_POST = ({ type, id }: IPostQueryProps) => {
  return gql`
    query {
        readOne ( id: ${id} ) {
          ${posts[type]}
        }
    }
  `;
};

export const GET_POST_LIST = ({ type, page, size }: IPostProps) => {
  return gql`
    query {
      readByCategory ( category: "${type}" page: ${page}  ) {
        entity {
          id
          ${DEFAULT_POST}
        }
        totalPage
        currentPage
      }
    }
  `;
};

export const UPDATE_POST = ({ type, data }: IPostMutateProps) => {
  return gql`
    mutation {
      update ( input: ${data} ) {
        ${posts[type]}
      }
    }
  `;
};

export const CREATE_POST = ({ type, data }: IPostMutateProps) => {
  return gql`
    mutation {
      create ( input: ${data} ) {
        ${posts[type]}
      }
    }
  `;
};
