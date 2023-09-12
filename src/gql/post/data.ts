export const DEFAULT_POST = `
    category
    title
    content
    createdAt
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
    techs
    startTime
    endTime
    field
  `,
  CODE_REVIEW: `
    ${DEFAULT_POST}
    prUrl
  `,
};
