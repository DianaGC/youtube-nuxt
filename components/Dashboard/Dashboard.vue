<script>
import { mapState } from "vuex";
import YoutubeItem from "../YoutubeItem/YoutubeItem.vue";
import './dashboard.scss';

export default {
  mounted() {
    this.$store.dispatch("getVideos");
  },
  computed: {
    ...mapState({ movies: (state) => state.dashboard.videos}),
  },
  components: { YoutubeItem },
  methods: {
    handlerPlay(key) {
      this.$store.commit("setVideoId",key);
      if (this.$store.state.youtube.player) {
        this.$store.state.youtube.player.loadVideoById(key);
      }
      this.$router.push("/watch");
    },
  },
};
</script>

<template>
  <v-container grid-list-xl>
    <div class="d-flex flex-wrap mb-6 bg-surface-variant">
      <button class="menu-main ma-2 pa-2">All</button>
      <button class="menu-main ma-2 pa-2">Mixes</button>
      <button class="menu-main ma-2 pa-2">Music</button>
      <button class=" menu-main ma-2 pa-2">Rihanna</button>
      <button class=" menu-main ma-2 pa-2">Ted Talks</button>
    </div>

    <v-layout wrap>
      <v-flex xs12 sm5 md3 lg3 v-for="item in movies" :key="item.id.videoId">
        <box v-on:click="handlerPlay(item.id.videoId)" style="cursor: pointer">
          <div>
            <img
              class="radio"
              width="100%"
              height="80%"
              :src="item.snippet.thumbnails.high.url"
              contain
              aspect-ratio="1"
            />
          </div>
          <div class="text-sm-left">
            <div class="title1">{{ item.snippet.title }}</div>
            <div class="text1">{{ item.snippet.channelTitle }}</div>
          </div>
        </box>
      </v-flex>
    </v-layout>
  </v-container>
</template>