export const DEFAULT_POST = `
    category
    title
    content
    createdAt
    likeCount
    commentCount
    doesLike
    user {
      id
      nickName
      profileImage
    }
`;

export const ALL_POST = `
    startTime
    endTime
    field
    prUrl
    isFinished
    lostThingImage
    place
    keepingPlace
`;

export const LOST_FOUND_POST = `
  lostThingImage
  place
  foundUser {
    id
    nickName
  }
`;

export const posts = {
  COMMON: `
    ${DEFAULT_POST}
  `,
  NOTICE: `
    ${DEFAULT_POST}
  `,
  PROJECT: `
    ${DEFAULT_POST}
    startTime
    endTime
    field
  `,
  CODE_REVIEW: `
    ${DEFAULT_POST}
    prUrl
    isFinished
  `,
  LOST: `
    ${DEFAULT_POST}
    ${LOST_FOUND_POST}
  `,
  FOUND: `
    ${DEFAULT_POST}
    ${LOST_FOUND_POST}
    keepingPlace
  `,
};
