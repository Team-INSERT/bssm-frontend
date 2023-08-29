import { gql } from "@apollo/client";

const DEFAULT_POST = gql`
    myLike
    category
    createdAt
    totalComments
    totalLikes
    title
    content
`;

export const posts = {
  COMMON: gql`
    ${DEFAULT_POST}
  `,
  NOTICE: gql`
    ${DEFAULT_POST}
  `,
  PROJECT: gql`
    ${DEFAULT_POST}
    techs
    startTime
    endTime
    field
  `,
  CODE_REVIEW: gql`
    ${DEFAULT_POST}
    prUrl
  `,
};
