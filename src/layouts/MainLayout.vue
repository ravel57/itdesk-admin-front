<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>
          <q-btn
            flat
            round
            dense
            side
            icon="logout"
            @click="logout"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <EssentialLink
          v-for="link in store.instances"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import axios from 'axios'
import { useStore } from 'stores/store'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data: () => ({
    leftDrawerOpen: false
  }),

  methods: {
    logout () {
      axios.get('/logout')
        .then(() => {
          location.reload()
        })
        .catch(() => {
          location.reload()
        })
    },

    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  },

  setup (props, ctx) {
    const store = useStore()
    return { store }
  }
})
</script>
