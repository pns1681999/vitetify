import { i18n } from '@/plugins/i18n'

export const t = i18n.global.t
export const locale = i18n.global.locale
export function setLocale(lang: string) {
  i18n.global.locale.value = lang
}
