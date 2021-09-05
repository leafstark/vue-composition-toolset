import { ref, watchEffect, onBeforeUnmount } from "vue-demi"

export function useTimerFn(cb, interval = 1000, immediate = false) {
  const trigger = ref(true)
  let timer = null

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
