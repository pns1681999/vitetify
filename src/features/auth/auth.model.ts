import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { useJwt } from '@vueuse/integrations/useJwt'
import type { TLogin } from './auth.type'
import { loginSchema } from './auth.type'
import { postLogin } from './auth.service'
import { errorHandle } from '@/hooks'

export const NAMESPACE = 'auth-module'
export const use = defineStore(NAMESPACE, () => {
  const accessToken = ref('' as string)
  const scheme = computed(() => {
    return toTypedSchema(loginSchema)
  })
  const { payload } = useJwt(accessToken)

  const isExpired = computed(() => payload.value?.exp && (payload.value.exp * 1000 < Date.now()))
  const isAuth = computed(() => !!accessToken.value && isExpired.value === false)

  const router = useRouter()
  const route = useRoute()

  const { errors, defineField, handleSubmit, resetForm } = useForm<TLogin>({
    validationSchema: scheme,
    initialValues: {
      username: '',
      password: '',
    },
  })
  const [username] = defineField('username')
  const [password] = defineField('password')

  const { execute, isLoading } = useAsyncState(
    (payload: TLogin) => postLogin(payload),
    null,
    { immediate: false, throwError: true, onError: errorHandle },
  )

  const handleSignIn = handleSubmit((values) => {
    return execute(0, values)
      .then((value) => {
        if (!value)
          return
        accessToken.value = value.accessToken
        resetForm()
        if (route.query.redirect)
          router.push(route.query.redirect as string)
        else router.push('/')
      })
      .catch(() => {
      })
  })

  const handleSignOut = () => {
    accessToken.value = ''
    router.push('/login')
  }

  return {
    isLoading,
    accessToken,
    isAuth,
    isExpired,
    username,
    password,
    errors,
    payload,
    handleSignIn,
    handleSignOut,
  }
}, {
  persist: {
    storage: window.localStorage,
    paths: ['accessToken'],
  },
})
