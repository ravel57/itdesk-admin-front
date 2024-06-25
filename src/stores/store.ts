import { defineStore } from 'pinia'
import { EssentialLinkProps } from 'components/EssentialLink.vue'

export const useStore = defineStore('counter', {

  state: () => ({
    instances: [
      {
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: '/'
      }
    ]
  }),

  getters: {},

  actions: {}

})
