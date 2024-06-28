<template>
  <q-input
    :model-value="usersCount"
    label="Максимальное число пользователей (операторов)"
    type="number"
    min="0"
  />
  <q-input
    v-model="formattedDate"
    label="Enter Date"
    mask="####-##-##"
    :rules="[val => !!val || 'Date is required']"
    @input="updateDate"
  >
    <template
      v-slot:prepend
    >
      <q-icon
        name="event"
        class="cursor-pointer"
      >
        <q-popup-proxy
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            v-model="date"
            mask="DD.MM.YYYY HH:mm"
          />
        </q-popup-proxy>
      </q-icon>
    </template>
    <!--  <q-input-->
    <!--    v-model="licenseValidUntil"-->
    <!--    clearable-->
    <!--    label="Дедлайн"-->
    <!--  >-->
  </q-input>
</template>

<script lang="ts">

export default {
  name: 'InstancesSetting',

  props: {
    title: {
      type: String,
      required: true
    },
    usersCount: {
      type: Number,
      required: true
    },
    licenseValidUntil: {
      type: Date,
      required: true
    }
  },

  data: () => ({
    date: new Date()
  }),

  computed: {
    formattedDate: {
      get (): string {
        return this.licenseValidUntil ? this.licenseValidUntil.toISOString().substring(0, 10) : ''
      },
      set (value: string) {
        if (value) {
          this.updateDate(new Date(value))
        } else {
          /* empty */
        }
      }
    }
  },
  methods: {
    updateDate (newDate: Date) {
      this.$emit('update', newDate)
    }
  }
}
</script>
