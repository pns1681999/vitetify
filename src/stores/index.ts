import type { Pinia } from 'pinia'
import { homeHistoryModel } from '@/features/home-history'
import { authModel } from '@/features/auth'
import { userModel } from '@/features/user'

export function useStores(pinia?: Pinia) {
  return {
    homeHistoryStore: homeHistoryModel.use(pinia),
    authStore: authModel.use(pinia),
    userStore: userModel.use(pinia),
  }
}
