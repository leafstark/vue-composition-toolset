import { getCurrentInstance } from 'vue-demi'

export function useRouter() {
  const { proxy } = getCurrentInstance()
  const router = proxy.$router
  const route = proxy.$route
  return { route, router }
}
