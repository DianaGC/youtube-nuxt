import { getVideos } from "./actions";


export interface IState {
  videos: [object]
}

export default {
  state: {
    videos: [],
  },
  mutations: {
    setVideos: (state: IState, data: [object]) => state.videos = data,
  },
  actions: {
    getVideos: getVideos
  }
}