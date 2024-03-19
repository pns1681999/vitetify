import type { FetchOptions, FetchRequest } from 'ofetch'
import { ofetch as $fetch } from 'ofetch'
import { defu } from 'defu'
import { $toast } from './toast'
import { apiEndpoint } from '@/configs/env.config'
import { useStores } from '@/stores'

export async function $api<T = unknown>(
  request: FetchRequest,
  options?: FetchOptions,
) {
  const { authStore } = useStores()
  const defaultConfig: FetchOptions = {
    baseURL: apiEndpoint,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...(authStore.isAuth && {
        Authorization: `Bearer ${authStore.accessToken}`,
      }),
    },
  }

  return $fetch<T>(request, defu(options, defaultConfig) as FetchOptions<'json'>)
}

export function errorHandle(e: unknown) {
  const { data } = e as { data: { message: string } }
  if (!data?.message)
    return
  $toast.error(t(data.message))
}
