import { graphQLClient } from "@/graphql";
import { gql } from "graphql-request";
import {
  GetPostListProps,
  PostCreateQuery,
  PostData,
  PostListQuery,
  PostQuery,
  PostUpdateQuery,
} from "../../interfaces";
import { posts } from "../graphql/data.graphql";
import { get회당불러올게시글개수 } from "../../helpers";

export const getGraphQLPostList = async ({
  category,
  page,
}: GetPostListProps) => {
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

export const getGraphQLPost = async (id: number) => {
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

export const updateGraphQLPost = async (post: PostData) => {
  const { update } = await graphQLClient.request<PostUpdateQuery>(
    gql`
      mutation UpdatePost($data: PostInput) {
        update(input: $data) {
          id
        }
      }
    `,
    { data: post },
  );
  return update.id;
};

export const createGraphQLPost = async (post: PostData) => {
  const { create } = await graphQLClient.request<PostCreateQuery>(
    gql`
      mutation CreatePost($data: PostInput) {
        create(input: $data) {
          id
        }
      }
    `,
    { data: post },
  );
  return create.id;
};

export const deleteGraphQLPost = async (id: number) => {
  await graphQLClient.request(
    gql`
      mutation DeletePost($id: Int) {
        delete(id: $id) {
          deletedId
        }
      }
    `,
    { id },
  );
};
