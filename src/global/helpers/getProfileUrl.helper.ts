const getProfileUrl = (userCode: number) => {
  return `https://bssm.kro.kr/_next/image?url=https://auth.bssm.kro.kr/resource/user/profile/${userCode}.png&w=256&q=75`;
};

export default getProfileUrl;
