export type Fn = () => void

export type InstanceType<V> = V extends { new (...arg: any[]): infer X }
  ? X
  : never

export type VM<V> = InstanceType<V> & {
  unmount(): void
}
