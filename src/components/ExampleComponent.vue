<template>
  <q-input
    :model-value="usersCount"
    label="Максимальное число пользователей (операторов)"
    type="number"
    min="0"
  />
  <q-input
    :model-value="licenseValidUntil"
    label="Срок действия лицензии"
  />
</template>

<script lang="ts">

export default {
  name: 'ExampleComponent',

  props: {
    title: {
      type: String,
      required: true
    }
  },

  data: () => ({
    usersCount: 0,
    licenseValidUntil: ''
  }),

  methods: {},

  computed: {}
}
</script>
