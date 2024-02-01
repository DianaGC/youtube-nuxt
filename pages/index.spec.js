import { mount } from '@vue/test-utils';
import index from '@/pages/index.vue';

describe('Login page test',()=>{

    it("When de component is render, then should render the children",()=>{
        const wrapper = mount(index)
        expect(wrapper.vm).toBeTruthy()
    })
})
