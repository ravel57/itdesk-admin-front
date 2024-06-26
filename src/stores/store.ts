import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {

  state: () => ({
    instances: [
      {
        title: 'test',
        caption: 'quasar.dev',
        icon: 'school',
        link: '/'
      }
    ]
  }),

  getters: {},

  actions: {}

})
