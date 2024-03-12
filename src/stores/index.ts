import type { Pinia } from 'pinia'
import { homeHistoryModel } from '@/features/home-history'

export function useStores(pinia?: Pinia) {
  return {
    homeHistoryStore: homeHistoryModel.use(pinia),
  }
}
