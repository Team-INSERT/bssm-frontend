import { StorageKey } from "./types";

export default class Storage {
  private static isWindowAvailable() {
    return typeof window !== "undefined";
  }

  static getItem(key: StorageKey) {
    return this.isWindowAvailable() ? localStorage.getItem(key) : null;
  }

  static setItem(key: StorageKey, value: string) {
    if (this.isWindowAvailable()) localStorage.setItem(key, value);
  }

  static delItem(key: StorageKey) {
    if (this.isWindowAvailable()) localStorage.removeItem(key);
  }

  static clear() {
    if (this.isWindowAvailable()) localStorage.clear();
  }
}
