import { gql } from "@apollo/client";
import { PostCategoryType } from "@/types";
import { DEFAULT_POST, ALL_POST, posts } from "./data";

interface IPostProps {
  type: PostCategoryType;
  page: number;
  size: string | number;
}

interface IPostUpdateQueryProps {
  id: number;
}

export const GET_POST = ({ id }: IPostUpdateQueryProps) => gql`
    query GetPost {
        readOne ( id: ${id} ) {
          id
          ${DEFAULT_POST}
          ${ALL_POST}
        }
    }
  `;

export const GET_UPDATE_POST = ({ id }: IPostUpdateQueryProps) => gql`
    query GetPost {
        readOne ( id: ${id} ) {
          id
          ${DEFAULT_POST}
          ${ALL_POST}
        }
    }
`;

export const GET_POST_LIST = ({ type, page, size }: IPostProps) =>
  gql`
    query GetPostList {
      readByCategory ( category: "${type}" page: ${page} size: ${size}  ) {
        entity {
          id
          ${DEFAULT_POST}
          ${posts[type]}
        }
        totalPage
        currentPage
      }
    }
  `;

export const UPDATE_POST = gql`
  mutation UpdatePost($data: PostInput) {
    update(input: $data) {
      id
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($data: PostInput) {
    create(input: $data) {
      id
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: Int) {
    delete(id: $id) {
      deletedId
    }
  }
`;
