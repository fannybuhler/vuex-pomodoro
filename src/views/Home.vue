<template>
  <div class="home">
    <HelloWorld msg="Pomodoro Timer" />
    <Heading /> 
    <div class="wrapper">
      <SessionLength />
      <TimeLeft />
      <BreakLength />
    </div>
    <StartButton />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Heading from "@/components/Heading.vue";
import TimeLeft from "@/components/TimeLeft.vue";
import StartButton from "@/components/StartButton.vue";
import SessionLength from "@/components/SessionLength.vue";
import BreakLength from "@/components/BreakLength.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Heading,
    TimeLeft,
    StartButton,
    SessionLength,
    BreakLength
  }
};
</script>


<style scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
</style>