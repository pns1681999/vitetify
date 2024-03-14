import z from 'zod'

export const loginSchema = z.object({
  username: z.string().min(1, t('auth.validateUsernameEmpty')),
  // .email(t('auth.validateEmailInvalid')),
  password: z.string().min(1, t('auth.validatePasswordEmpty')),
})

export const loginResponseSchema = z.object({
  type: z.string(),
  accessToken: z.string(),
  expiresIn: z.string(),
})

export type TLogin = z.infer<typeof loginSchema>
export type TLoginResponse = z.infer<typeof loginResponseSchema>
