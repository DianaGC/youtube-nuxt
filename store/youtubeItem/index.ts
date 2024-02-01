import { getVideo } from './actionsYoutubeItem';

export interface IYoutubeState {
    videoId: object,
    player: string,
    videoInformation: object
}

export default {
    state: {
        videoId: '',
        player: null,
        videoInformation: {}
    },
    mutations: {
        setVideoId: (state: IYoutubeState, videoId: object) => state.videoId = videoId,
        setPlayer: (state: IYoutubeState, player: string) => state.player = player,
        setVideoInformation: (state: IYoutubeState, video: object) => state.videoInformation = video
    },
    actions: {
        getVideo: getVideo
    }
}

