import { gql } from "graphql-request";
import { graphQLClient } from "@/graphql";
import { ERROR } from "@/constants";
import { refresh } from "@/apis/token";
import { posts } from "./graphql/data.graphql";
import { get회당불러올게시글개수 } from "../helpers";
import {
  GetPostListProps,
  PostData,
  PostListQuery,
  PostQuery,
} from "../interfaces";

export const getPostList = async ({ category, page }: GetPostListProps) => {
  const 회당불러올게시글개수 = get회당불러올게시글개수();
  const { readByCategory } = await graphQLClient.request<PostListQuery>(
    gql`
      query GetPostList {
        readByCategory ( category: "${category}" page: ${page} size: ${회당불러올게시글개수}  ) {
          entity { ${posts[category]} }
          totalPage
          currentPage
        }
      }
    `,
  );
  return readByCategory;
};

export const getPost = async (id: number) => {
  const { readOne } = await graphQLClient.request<PostQuery>(
    gql`
      query GetUpdatePost {
        readOne ( id: ${id} ) {
          ${posts.ALL}
        }
      }
    `,
  );
  return readOne;
};

export const updatePost = async (post: PostData) => {
  try {
    const res = await graphQLClient.request(
      gql`
        mutation UpdatePost($data: PostInput) {
          update(input: $data) {
            id
          }
        }
      `,
      { data: post },
    );
    /**
      graphql 특성상 반환값을 unknown으로 반환하는데,
      post를 업데이트하고나서 id를 가져와 해당 아이디의 글로
      유저를 이동시키려면 이 값이 unknown이 아닌 any여야만함
    */
    // eslint-disable-next-line
    return res as any;
    // eslint-disable-next-line
  } catch (err: any) {
    /** 이또한 동일함 */
    const { code } = err.response;
    if (code === ERROR.CODE.TOKEN_403_2) {
      await refresh();
      updatePost(post);
    }
  }
};

export const createPost = async (post: PostData) => {
  try {
    const res = await graphQLClient.request(
      gql`
        mutation CreatePost($data: PostInput) {
          create(input: $data) {
            id
          }
        }
      `,
      { data: post },
    );
    // eslint-disable-next-line
    return res as any;
    // eslint-disable-next-line
  } catch (err: any) {
    const { code } = err.response;
    if (code === ERROR.CODE.TOKEN_403_2) {
      await refresh();
      createPost(post);
    }
  }
};
