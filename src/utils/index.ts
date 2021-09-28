import {
  defineComponent,
  createApp,
  h,
  getCurrentScope,
  onScopeDispose
} from 'vue-demi'
import { Fn, VM } from './types'
import VueRouter from 'vue-router'
import VueCompositionAPI from '@vue/composition-api'

export function createVueRouter() {
  const routes = [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Index' }
    },
    {
      path: '/error',
      name: 'error',
      meta: { title: 'Error Page' }
    }
  ]
  return new VueRouter({
    routes
  })
}

export function mount<V>(Comp: V) {
  const el = document.createElement('div')
  const app = createApp(Comp)
  app.use(VueRouter)
  app.use(VueCompositionAPI)

  // @ts-ignore
  const unmount = () => app.unmount(el)
  const comp = app.mount(el) as any as VM<V>
  comp.unmount = unmount
  return comp
}

export function useSetup<V>(setup: () => V) {
  const router = createVueRouter()
  const Comp = defineComponent({
    setup,
    render() {
      return h('div', [])
    },
    router
  })

  return mount(Comp)
}

export function tryOnScopeDispose(fn: Fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn)
    return true
  }
  return false
}

export function promiseTimeout(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
