import type { TPatientListResponse } from './user.type'

export async function getUserList({ page, itemsPerPage, sortBy, search, status, createdAfter, createdBefore }: { page: number, itemsPerPage: number, sortBy: { key: string, order: string }[], search?: string, status?: string, createdAfter?: string, createdBefore?: string }) {
  const searchField = ['name', 'email']
  const s = search ? `{"$or": [${searchField.map(field => `{"${field}":{"$contL": "${search}"}}`).join(',')}]}` : undefined

  const filter = [
    status && `status||$eq||${status}`,
    createdAfter && `createdAt||$gte||${createdAfter}`,
    createdBefore && `createdAt||$lte||${createdBefore}`,
  ].filter(Boolean)

  const limit = itemsPerPage
  const sort = sortBy.map(item => `${item.key},${item.order.toUpperCase()}`)

  return await $api<TPatientListResponse>('/patients', {
    method: 'GET',
    query: {
      s,
      filter,
      limit,
      page,
      sort,
    },
  })
}
