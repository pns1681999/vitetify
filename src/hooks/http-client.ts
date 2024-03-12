import type { FetchOptions, FetchRequest } from 'ofetch'
import { ofetch as $fetch } from 'ofetch'
import { defu } from 'defu'
import { apiEndpoint } from '@/configs/env.config'

export async function $api<T = unknown>(
  request: FetchRequest,
  options?: FetchOptions,
) {
  const defaultConfig: FetchOptions = {
    baseURL: apiEndpoint,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  return $fetch<T>(request, defu(options, defaultConfig) as FetchOptions<'json'>)
}
