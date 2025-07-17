// src/stores/language.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

/** @typedef {'fr' | 'en' | 'sp'} Language */

/** @type {Language} */
const defaultLanguage = 'fr'; // Changed from 'en' to 'fr'

/** @type {Language} */
const initialLanguage = browser ? 
  /** @type {Language} */ (localStorage.getItem('language')) || defaultLanguage : 
  defaultLanguage;

export const currentLanguage = writable(initialLanguage);

// Subscribe to changes and save to localStorage
if (browser) {
  currentLanguage.subscribe(value => {
    localStorage.setItem('language', value);
  });
}