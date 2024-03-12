import { defineStore } from 'pinia'

export const NAMESPACE = 'home-history-module'

export const use = defineStore(NAMESPACE, () => {
  const homeHistory = ref([] as string[])
  const addHistory = (item: string) => {
    homeHistory.value.push(item)
  }
  return {
    homeHistory,
    addHistory,
  }
})
