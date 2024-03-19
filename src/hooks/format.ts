import dayjs from 'dayjs'

export function formatDate(date: string, format = 'DD/MM/YYYY HH:mm') {
  if (!date)
    return ''
  return dayjs(date).format(format)
}
