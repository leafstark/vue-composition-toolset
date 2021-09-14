# useTimerFn

Use a trigger to control a timer that executes the function

## Usage

```js
import { useTimerFn } from 'vue-composition-toolset'

export default {
  setup() {
   const doSomething = () => {
      /* your function */
    }
   const { trigger } = useTimerFn(doSomething, 30 * 1000) // The function will be executed every 30 seconds

   trigger.value = false // Disable the timer that executes the function
   trigger.value = true // Enable the timer that executes the function
  }
}
```
```js
  useTimerFn(doSomething, 30 * 1000, true) // The function will be executed at once and every 30 seconds
```
