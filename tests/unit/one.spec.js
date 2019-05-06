import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import One from '@/views/test/One.vue'

describe('点击改变key值', () => {
    it('key会变为33', () => {
        const
            wrapper = shallowMount(One),
            handle = wrapper.find({ ref: 'handle' })

        handle.trigger('click')
        expect(wrapper.find('#result').text()).to.equal('33')
    })
})

describe('利用sinon', () => {
    it('函数被调用参数是123', () => {
        const
            spy = sinon.spy(),
            wrapper = shallowMount(One, {
                methods: {
                    change: spy
                }
            }),
            handle = wrapper.find({ ref: 'proxyCall' })

        handle.trigger('click')
        expect(spy.calledWith(123)).to.equal(true)
    })
})
