import { Ref, ref, watchEffect, onBeforeUnmount } from 'vue-demi'

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

  onBeforeUnmount(() => {
    clearInterval(timer)
  })

  return {
    trigger,
  }
}
