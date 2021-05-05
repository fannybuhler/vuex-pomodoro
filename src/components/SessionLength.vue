<template>
  <div>
    <button @click="increaseSession">+</button>
    <h3>Session</h3>
    <h3>{{ prettyTime }} min</h3>
    <button @click="decreaseSession">-</button>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "SessionLength",
  methods: {
    increaseSession() {
      this.$store.commit('changeSessionLength', 1)
    },

    decreaseSession() {
      this.$store.commit('changeSessionLength', -1)
    }
  },

  computed: {
    prettyTime() {
      const session = this.$store.getters.getSessionLength
      return moment.utc(session * 1000).format("m");
    }
  }

}
</script>

<style>

</style>