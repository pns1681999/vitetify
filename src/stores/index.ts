import type { Pinia } from 'pinia'
import { homeHistoryModel } from '@/features/home-history'
import { authModel } from '@/features/auth'

export function useStores(pinia?: Pinia) {
  return {
    homeHistoryStore: homeHistoryModel.use(pinia),
    authStore: authModel.use(pinia),
  }
}
