import { useSetup } from 'vue-composition-toolset'
import { useRouter } from '.'
// import { clearRuntimeVm } from '../runtime'

describe('useRouter', () => {
  it('should be defined', () => {
    expect(useRouter).toBeDefined()
  })

  it('should update route', async () => {
    const wrapper = useSetup(() => {
      const { route, router } = useRouter()
      expect(route.name).toBe('index')
      expect(route.meta.title).toBe('Index')
      router.push('/error')
      expect(route.name).toBe('error')
      expect(route.meta.title).toBe('Error Page')
    })
    wrapper.unmount()
  })
})
