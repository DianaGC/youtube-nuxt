jest.mock('@/store', () => ({
    dispatch: jest.fn(),
}));

import { mount, createLocalVue } from '@vue/test-utils';
import Dashboard from '@/components/Dashboard/Dashboard.vue';
import Vuex from 'vuex';

const localState = createLocalVue();
localState.use(Vuex);

describe('Dashboar Component', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                videos: [],
            },
            mutations: {
                setVideos: jest.fn(),

            },
            actions: {
                setVideos: jest.fn()
            }
        })
    })

    it("when the component is called then it should render", () => {
        const wrapper = mount(Dashboard, {
            localState,
            store
        })
        expect(wrapper).toBeTruthy()


    })
})