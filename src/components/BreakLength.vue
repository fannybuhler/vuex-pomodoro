<template>
  <div>
    <button @click="increaseBreak">+</button>
    <h3>Break</h3>
    <h3>{{ prettyTime }} min</h3>
    <button @click="decreaseBreak">-</button>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "BreakLength",
  methods: {
    increaseBreak() {
      this.$store.commit('changeBreakLength', 1)
    },

    decreaseBreak() {
      this.$store.commit('changeBreakLength', -1)
    }
  },

  computed: {
    prettyTime() {
      const breakTime = this.$store.getters.getBreakLength
      return moment.utc(breakTime * 1000).format("m");
    }
  }

}
</script>

<style>

</style>