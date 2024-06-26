<template>
  <q-page>
    <example-component
      title="Example component"
      active
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExampleComponent from 'components/ExampleComponent.vue'

export default defineComponent({
  name: 'IndexPage',

  components: {
    ExampleComponent
  },

  data: () => ({})
})
</script>
