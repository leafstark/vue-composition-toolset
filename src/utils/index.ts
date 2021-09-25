import { defineComponent, createApp, h } from 'vue-demi'
import { getCurrentScope, onScopeDispose } from 'vue-demi'
import { Fn } from './types'

type InstanceType<V> = V extends { new (...arg: any[]): infer X } ? X : never
type VM<V> = InstanceType<V> & { unmount(): void }

export function mount<V>(Comp: V) {
  const el = document.createElement('div')
  const app = createApp(Comp)

  // @ts-ignore
  const unmount = () => app.unmount(el)
  const comp = app.mount(el) as any as VM<V>
  comp.unmount = unmount
  return comp
}

export function useSetup<V>(setup: () => V) {
  const Comp = defineComponent({
    setup,
    render() {
      return h('div', [])
    }
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
