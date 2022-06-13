<template>
  <div class="container">
    <!-- <redComp v-if="activityComp == 'red'"></redComp>
    <blueComp v-if="activityComp == 'blue'"></blueComp>
    <greenComp v-if="activityComp == 'green'"></greenComp> -->
    <component :is="activityComp" msgRed="red compontent" msgGreen="green component"></component>

    <button class="red" @click="activityComp = 'redComp'">red</button>
    <button class="blue" @click="activityComp = 'blueComp'">blue</button>
    <button class="green" @click="activityComp = 'greenComp'">green</button>
  </div>
</template>

<script>
import redComp from "@/components/redComp";
import blueComp from "@/components/blueComp";
import greenComp from "@/components/greenComp";
export default {
  data() {
    return {
      activityComp: "redComp",
    };
  },
  components: {
    redComp,
    blueComp,
    greenComp,
  },
};
</script>
