<script>
import { mapState } from "vuex";
export default {
  name: "YoutubeItem",
  data() {
    return {
      playerId: "youtube-player",
    };
  },
  mounted() {
    this.loadYouTubeApi().then(() => {
      this.createPlayer();
    });
  },
  computed: {
    ...mapState({ youtubeVideoId: (state) => state.youtube.videoId }),
  },
  methods: {
    loadYouTubeApi() {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);

        script.onload = () => {
          resolve();
        };
      });
    },
    createPlayer() {
      window.onYouTubeIframeAPIReady = () => {
        this.player = new YT.Player(this.playerId, {
          height: "360",
          width: "640",
          videoId: this.youtubeVideoId,
          events: {
            onReady: this.onPlayerReady,
            onStateChange: this.onPlayerStateChange,
          },
        });
        this.$store.commit("setPlayer", this.player);
      };
    },
    onPlayerReady(event) {
      event.target.playVideo();
    },
  },
};
</script>
<template>
  <v-container style="display: flex; justify-content: center">
    <div :id="playerId"></div>
  </v-container>
</template>

  