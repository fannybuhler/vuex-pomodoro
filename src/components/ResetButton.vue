<template>
  <button @click="reset">
    reset
  </button>
</template>

<script>
export default {
  name: "ResetButton",
  methods: {
    reset(){
      this.$store.dispatch('reset')
    }
  }
}
</script>

<style>

</style>