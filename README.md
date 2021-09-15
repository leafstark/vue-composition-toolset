# vue-composition-toolset ![Travis (.com)](https://img.shields.io/travis/com/leafstark/vue-composition-toolset) ![Codecov](https://img.shields.io/codecov/c/github/leafstark/vue-composition-toolset)

> Minimalist design

Provide users with the simplest and most direct development experience

## Install

**Thanks for** [vue-demi](https://github.com/vueuse/vue-demi), it works for both Vue 2 & 3.

```
npm i vue-composition-toolset
```

## Usage

```ts
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

## License

[MIT License](https://github.com/leafstark/vue-composition-toolset/blob/master/LICENSE) © 2021-PRESENT [leafstark](https://github.com/leafstark)
