import { StorageSettingKey, StorageTokenKey } from "@/types";

type StorageKey = StorageSettingKey | StorageTokenKey;

export default class Storage {
  static getItem(key: StorageKey) {
    return typeof window !== "undefined" ? localStorage.getItem(key) : "";
  }

  static setItem(key: StorageKey, value: string) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
  }

  static delItem(key: StorageKey) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  }

  static clear() {
    if (typeof window === "undefined") return;
    localStorage.clear();
  }
}
