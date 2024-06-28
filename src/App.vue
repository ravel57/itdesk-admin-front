<template>
  <router-view/>
</template>

<script lang="ts">

import { useStore } from 'stores/store'

export default {
  name: 'App',

  created () {
    const store = useStore()
    store.fetchData()
    return { store }
  }
}
</script>
