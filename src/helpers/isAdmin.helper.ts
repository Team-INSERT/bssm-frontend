import ROLE from "@/constants/role.constant";

const isAdmin = (authority: string) => {
  if (authority === ROLE.ADMIN) return true;
  return false;
};

export default isAdmin;
