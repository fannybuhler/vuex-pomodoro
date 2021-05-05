<template>
  <div>
    <h3>{{ prettyDuration }}</h3>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "TimeLeft",
  computed: {
    duration() {
      const breakLength = this.$store.getters.getBreakLength
      const sessionLength = this.$store.getters.getSessionLength
      const durationTime = this.$store.getters.getDurationTime
      const isSession = this.$store.getters.getIsSession

      if(isSession) {
        return sessionLength - durationTime
      } 
      
      return breakLength - (durationTime - sessionLength)
    },

    prettyDuration() {
      return moment.utc(this.duration * 1000).format("mm:ss");
    }
  }
}
</script>

<style>

</style>