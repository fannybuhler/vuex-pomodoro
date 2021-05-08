<template>
  <button @click="toggleIsStarted">
    {{ isStarted ? 'Stoppa' : 'Starta' }}
  </button>
</template>

<script>
export default {
  name: "StartButton",
  computed: {
    isStarted() {
      const isStarted = this.$store.getters.getIsStarted
      return isStarted
    }
  },

  methods: {
    toggleIsStarted(){
      this.$store.dispatch('toggleIsStarted')
    }
  },

  mounted() {
    setInterval(() => {
      if (this.isStarted) {
        this.$store.dispatch('increment')
      }
    }, 1000) 
  }
}
</script>

<style>

</style>