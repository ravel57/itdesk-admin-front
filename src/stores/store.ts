import { defineStore } from 'pinia'
import axios from 'axios'
import { Instance, LinkElement } from 'stores/models'

export const useStore = defineStore('counter', {

  state: () => ({
    links: [] as LinkElement[],
    instances: [] as Array<Instance>
  }),

  getters: {},

  actions: {
    fetchData () {
      axios.get('/api/v1/instances')
        .then(response => {
          this.instances = response.data
          this.instances.forEach((instance: Instance) => {
            instance.validUntil = new Date(instance.validUntil)
            instance.createdAt = new Date(instance.createdAt)
          })
          this.links = response.data.map((instance : Instance) => <LinkElement> {
            title: instance.name,
            caption: `${instance.validUntil}`,
            link: `/instance/${instance.id}`
          })
        })
    }
  }

})
