import { gql } from "@apollo/client";
import { PostCategoryType } from "@/types";
import { posts } from "./data";

interface IPostProps {
  type: PostCategoryType;
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

export const GET_POST_LIST = ({ type }: IPostProps) => {
  return gql`
    query {
      readByCategory ( category: "${type}" ) {
        id
        title
        content
        category
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
