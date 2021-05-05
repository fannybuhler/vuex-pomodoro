<template>
  <button @click="isStarted = !isStarted">
    {{ isStarted ? 'Stoppa' : 'Starta' }}
  </button>
</template>

<script>
export default {
  name: "StartButton",

  data: () => ({
    isStarted: false
  }),

  mounted() {
    setInterval(() => {
      if (this.isStarted) {
        this.$store.dispatch('increment')
        console.log('Get duration 2:', this.$store.getters.getDuration)
      }
    }, 1000) 
  }
}
</script>

<style>

</style>