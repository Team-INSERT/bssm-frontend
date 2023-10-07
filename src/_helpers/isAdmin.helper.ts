import ROLE from "@/_constants/role.constant";

const isAdmin = (authority: string) => {
  if (authority === ROLE.ADMIN) return true;
  return false;
};

export default isAdmin;
