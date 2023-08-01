import { StorageSettingKey } from "@/types/";

export default class Storage {
  static getItem(key: StorageSettingKey) {
    return typeof window !== "undefined" ? localStorage.getItem(key) : null;
  }

  static setItem(key: StorageSettingKey, value: string) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
  }

  static delItem(key: StorageSettingKey) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  }
}
