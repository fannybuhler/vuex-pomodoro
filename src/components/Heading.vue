<template>
  <h1>
    {{ isSession ? 'Session' : 'Break' }}
  </h1>
</template>

<script>
export default {
  name: "Heading",

  computed: {
    isSession() {
      const breakLength = this.$store.getters.getBreakLength
      const sessionLength = this.$store.getters.getSessionLength
      const duration = this.$store.getters.getDuration

      const durationTime = duration % (breakLength + sessionLength)
      
      return durationTime < sessionLength
    }
  }
}
</script>
