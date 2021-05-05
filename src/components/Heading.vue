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
      return this.$store.getters.getIsSession
    }
  }
}
</script>
