import { promiseTimeout, useSetup } from 'vue-composition-toolset'
import { useTimerFn } from '.'

describe('useTimerFn', () => {
  it('use triger to control', async () => {
    const callback = jest.fn()
    const interval = 1000
    const { trigger } = useTimerFn(callback, interval)
    await promiseTimeout(interval)
    expect(callback).toHaveBeenCalled()
    callback.mockReset()
    trigger.value = false
    await promiseTimeout(interval)
    expect(callback).not.toHaveBeenCalled()
  })

  it('clean the timer when unmounted', async () => {
    const callback = jest.fn()
    const interval = 1000
    const wrapper = useSetup(() => {
      useTimerFn(callback, interval)
    })
    await promiseTimeout(interval)
    expect(callback).toHaveBeenCalled()
    callback.mockReset()
    wrapper.unmount()
    await promiseTimeout(interval)
    expect(callback).not.toHaveBeenCalled()
  })

  it('the default interval is 1000ms', async () => {
    const callback = jest.fn()
    const interval = 1000
    useTimerFn(callback)
    await promiseTimeout(interval)
    expect(callback).toHaveBeenCalled()
  })

  it('immediately call the callback function when the third params is true', async () => {
    const callback = jest.fn()
    const interval = 1000
    useTimerFn(callback, interval, true)
    expect(callback).toHaveBeenCalled()
  })
})
