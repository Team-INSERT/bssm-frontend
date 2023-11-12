import { StorageKeyType } from "./types";

export default class Storage {
  static getItem(key: StorageKeyType) {
    return typeof window !== "undefined" ? localStorage.getItem(key) : null;
  }

  static setItem(key: StorageKeyType, value: string) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
  }

  static delItem(key: StorageKeyType) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  }

  static clear() {
    if (typeof window === "undefined") return;
    localStorage.clear();
  }
}
