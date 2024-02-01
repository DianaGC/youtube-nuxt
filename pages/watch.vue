<script>
import {  mapState } from "vuex";
export default {
  name:"watch",
  layout: "Layout",
  computed: {
    ...mapState({
      videoId: (state) => state.youtube.videoId,
      videoInformation: (state) => state.youtube.videoInformation,
    }),
  },
  mounted() {
    this.$store.dispatch("getVideo", "2FyYaov56tc");
  },
};
</script>
<style lang="scss" scoped>
</style>

<template>
  <v-container>
    <box>
      <div>
        <YoutubeItem />
      </div>

      <div class="text-sm-left" style="margin: 5%;">
        <div v-if="videoInformation.snippet">
          <div ref="title" class="title1">{{ videoInformation.snippet.title }}</div>
          <div class="text1">{{ videoInformation.snippet.description }}</div>
        </div>

        <h1 v-else>Oh no 😢</h1>
      </div>
    </box>
  </v-container>
</template>
