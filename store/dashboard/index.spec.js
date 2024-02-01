import axios from 'axios';
import { getVideos } from "./actions";


describe('actions', () => {
    test.skip('When getVideos is called, then commit should be called once', async () => {
        const data = [{
            "kind": "youtube#video",
            "etag": "897CweidU7xcZ1DCONy8Hb9x4A4",
            "id": "2FyYaov56tc",
            "snippet": {
                "publishedAt": "2023-11-18T00:28:33Z"
            }
        }]
        const commit = jest.fn();
        jest.mock('axios')
        const mockedAxios = require('axios')
        mockedAxios.get.mockResolvedValue({ data });
        await getVideos({ commit });
        expect(commit).toBeCalledTimes(1);

    })
})

//TODO Mockear axios