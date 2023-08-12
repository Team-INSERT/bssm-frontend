const getProfileUrl = (userCode: number) => {
  const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/_next/image`
    // test serve domain change
    .replace(
      process.env.NEXT_PUBLIC_TEST_DOMAIN_KEYWORD || "",
      process.env.NEXT_PUBLIC_MAIN_DOMAIN_KEYWORD || "",
    );
  const IMAGE_URL = `${process.env.NEXT_PUBLIC_USER_IMAGE_URL}/${userCode}.png&w=256&q=75`;

  return `${BASE_URL}?url=${IMAGE_URL}`;
};

export default getProfileUrl;
