import { createLocalVue, mount } from '@vue/test-utils';
import login from '@/pages/login.vue';
import Vuex from 'vuex';

const localState = createLocalVue();
localState.use(Vuex);
jest.mock('@/store', () => ({
    dispatch: jest.fn(),
}));
describe('Login page test', () => {
    let store;
    beforeEach(() => {
        const dispatchMock = jest.fn();
        store = new Vuex.Store({
            state: {

            },
            actions: {
                fetchDataAction: dispatchMock,
            },
            methods: {
                fetchDataAction: dispatchMock,
            }

        })
    })

    it("When de component is render, then should render the children", async () => {
        const wrapper = mount(login, {
            localState,
            store
        })
        await wrapper.vm.fetchDataAction;
        expect(wrapper.vm).toBeTruthy()


    })
})

