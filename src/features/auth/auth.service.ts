import type { TLogin, TLoginResponse } from './auth.type'

export async function postLogin(params: TLogin) {
  return await $api<TLoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(params),
  })
}
