import request, { gql } from "graphql-request";
import { posts } from "./graphql.service";
import { get회당불러올게시글개수 } from "../helpers";
import { GetPostListProps, PostListQuery } from "../interfaces";

export const getPostList = async ({ category, page }: GetPostListProps) => {
  const 회당불러올게시글개수 = get회당불러올게시글개수();
  const { readByCategory } = await request<PostListQuery>(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/graphql`,
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
