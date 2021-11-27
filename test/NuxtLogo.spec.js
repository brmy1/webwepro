import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('Iniciando teste unitario para itens de users', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
