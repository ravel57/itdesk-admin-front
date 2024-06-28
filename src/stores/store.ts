import { defineStore } from 'pinia'
import axios from 'axios'
import { Instance, LinkElement } from 'stores/models'

export const useStore = defineStore('counter', {

  state: () => ({
    links: [] as LinkElement[],
    instances: [] as Instance[]
  }),

  getters: {},

  actions: {
    fetchData () {
      axios.get('/api/v1/instances')
        .then(response => {
          console.log(response.data)
          this.instances = response.data
          this.links = response.data.map((instance : Instance) => <LinkElement> {
            title: instance.name,
            caption: `${instance.validUntil}`,
            link: `/instance/${instance.id}`
          })
        })
    }
  }

})
