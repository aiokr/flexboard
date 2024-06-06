import { defineStore } from 'pinia';

export const searchEngineStore = defineStore('searchEngine', {
  state: () => ({
    searchEngine: 'google',
  }),
  actions: {
    initializeSearchEngine() {
      this.searchEngine = localStorage.getItem('searchEngine') || 'google';
    },
    toggleSearchEngine(engName: string) {
      this.searchEngine = engName;
      localStorage.setItem('searchEngine', this.searchEngine);
    },
  },
});