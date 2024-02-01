import { mount, createLocalVue } from '@vue/test-utils';
import watch from '@/pages/watch.vue';
import Vuex from 'vuex';

jest.mock('@/pages/watch.vue', () => ({
    computed: {
        videoInformation: () => { },
        videoId: () => "rqrqr4242",

    },
}));

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Login page test', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                videoId: '1qwqq',
                player: null,
                videoInformation: {}
            },
            mutations: {
                setVideoId: jest.fn(),
                setPlayer: jest.fn(),
                setVideoInformation: jest.fn()
            },
            actions: {
                getVideo: jest.fn()
            }
        })
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("when the component is called then it should render ", () => {
        const wrapper = mount(watch)
        expect(wrapper).toBeTruthy()
    });

    test("when the component is called and have videoInformation then it should render  ", () => {
        const wrapper = mount(watch)
        expect(wrapper.find('videoInformation').text()).toBe('videoInformation')

    });

})
