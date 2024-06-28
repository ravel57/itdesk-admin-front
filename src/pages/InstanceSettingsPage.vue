<template>
  <q-page>
    <instances-setting
      :title="instance.name"
      :valid-until="instance.validUntil"
      :users-count="instance.usersCount"
      active
    />
  </q-page>
</template>

<script lang="ts">
import InstancesSetting from 'components/InstancesSetting.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'stores/store'
import { Instance } from 'stores/models'

export default {
  name: 'IndexPage',

  components: {
    InstancesSetting
  },

  data: () => ({
    instanceId: -1,
    instance: {} as Instance
  }),

  created () {
    this.instanceId = Number(this.router.params.instanceId)
    this.instance = this.store.instances.find((value: Instance) => value.id === this.instanceId) as Instance
  },

  setup () {
    const store = useStore()
    const router = useRoute()
    return { store, router }
  }
}
</script>
