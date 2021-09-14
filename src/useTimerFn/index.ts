import { Ref, ref, watchEffect } from 'vue-demi'
import { tryOnScopeDispose } from 'vue-composition-toolset'

export function useTimerFn(
  cb: () => void,
  interval: number = 1000,
  immediate?: boolean
): { trigger: Ref<boolean> } {
  const trigger = ref(true)
  let timer: any = null

  immediate && cb()

  watchEffect(() => {
    if (trigger.value === true) {
      timer = setInterval(() => {
        cb()
      }, interval)
    } else {
      clearInterval(timer)
    }
  })

  tryOnScopeDispose(() => {
    clearInterval(timer)
  })

  return {
    trigger,
  }
}
