<template>
  <div class="home">
    <HelloWorld msg="Pomodoro Timer" />
    <Heading /> 
    <TimeLeft />
    <StartButton />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Heading from "@/components/Heading.vue";
import TimeLeft from "@/components/TimeLeft.vue";
import StartButton from "@/components/StartButton.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Heading,
    TimeLeft,
    StartButton,
  }
};
</script>
