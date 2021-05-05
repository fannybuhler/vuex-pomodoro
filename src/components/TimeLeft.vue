<template>
  <div>
    <h3>{{ formattedTimeLeft }}</h3>
  </div>
</template>

<script>
export default {
  name: "TimeLeft",
  data: () => ({
    timeLeft: Number,
    timePassed: Number
  }),

  computed: {
    formattedTimeLeft() {
      const timeLeft = this.timeLeft
      const minutes = Math.floor(timeLeft / 60)
      let seconds = timeLeft % 60
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      return `${minutes}:${seconds}`
    },

  },

  mounted() {
    this.timeLeft = this.$store.getters.getSessionLength
    this.timePassed = this.$store.getters.getDuration
  }
}
</script>

<style>

</style>