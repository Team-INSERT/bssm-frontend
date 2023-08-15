import { Cookies } from "react-cookie";

const cookies = new Cookies();

export default class Cookie {
  static getItem(key: string) {
    return typeof window !== "undefined" ? cookies.get(key) : null;
  }

  static setItem(key: string, value: string) {
    if (typeof window === "undefined") return;
    cookies.set(key, value);
  }

  static delItem(key: string) {
    if (typeof window === "undefined") return;
    cookies.remove(key);
  }
}
