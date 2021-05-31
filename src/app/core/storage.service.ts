import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  /**
   * Save items to local storage
   * By key, value pairs
   * @param key the name of property
   * @param value the value we need to store
   */
  setItem(key: string, value: string): void {
    return localStorage.setItem(key, value);
  }

  /**
   * Get the value from local storage for a given property
   * @param key the key of the item we need
   * @returns  the value of the given key
   */
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Clear the localStorage and active variables
   */
  clearStorage(): void {
    location.reload();
    return localStorage.clear();
  }
}
