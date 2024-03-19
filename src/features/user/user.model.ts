import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import dayjs from 'dayjs'
import { getUserList } from './user.service'
import { patientSearchSchema } from './user.type'
import type { TPatient, TPatientSearch } from './user.type'
import { PatientStatus } from '@/configs/enum'

export const NAMESPACE = 'user-module'
export const use = defineStore(NAMESPACE, () => {
  const itemsPerPage = ref(10)
  const totalItems = ref(0)
  const totalPages = ref(1)
  const userList = ref([]) as Ref<TPatient[]>
  const headers = ref([
    { title: t('fullname'), key: 'name', sortable: false, minWidth: '200px' },
    { title: t('dob'), key: 'dob', sortable: false, minWidth: '170px' },
    { title: t('contact'), key: 'email', sortable: false },
    { title: t('status'), key: 'status', sortable: false, width: '120px' },
    { title: t('createdAt'), key: 'createdAt', minWidth: '170px', align: 'end' },
    { key: 'action', align: 'end', sortable: false },
  ])
  const optionsStatus = ref([
    { label: t('active'), value: PatientStatus.ACTIVE },
    { label: t('de-active'), value: PatientStatus.DEACTIVE },

  ])

  const searchParams = useUrlSearchParams('history')
  const page = computed(() => {
    return searchParams.page ? Number(searchParams.page) : 1
  })
  const changePage = (page: number) => {
    searchParams.page = page.toString()
  }
  const sortBy = computed(() => {
    if (searchParams.sortBy?.length > 0) {
      const [key, order] = (searchParams.sortBy as string)?.split(',') ?? []
      return [{ key, order }]
    }
    return []
  })
  const changeSort = (sortBy: any) => {
    if (sortBy.length === 0) {
      searchParams.sortBy = []
      return
    }
    searchParams.sortBy = `${sortBy[0].key},${sortBy[0].order}`
  }
  const status = computed(() => searchParams.status?.length ? searchParams.status : 'all')
  const changeStatus = (status: string) => {
    if (status === 'all') {
      searchParams.status = []
      return
    }
    searchParams.status = status
  }
  function updateParams(tableOptions: any) {
    searchParams.sort = tableOptions.sortBy?.map((item: any) => `${item.key},${item.order}`)
  }

  const searchScheme = computed(() => toTypedSchema(patientSearchSchema))
  const { defineField, handleSubmit: submitSearch, resetForm: resetSearch } = useForm<TPatientSearch>({
    validationSchema: searchScheme,
    initialValues: {
      searchTextField: searchParams.search as string | undefined,
      createdAfter: searchParams?.createdAfter?.length ? dayjs(searchParams.createdAfter as string).toDate() : undefined,
      createdBefore: searchParams?.createdBefore?.length ? dayjs(searchParams.createdBefore as string).toDate() : undefined,
    },
  })
  const [searchTextField] = defineField('searchTextField')
  const [createdAfter] = defineField('createdAfter')
  const [createdBefore] = defineField('createdBefore')
  const onSearch = submitSearch((values) => {
    searchParams.search = values?.searchTextField as string
    searchParams.createdAfter = values?.createdAfter ? dayjs(values?.createdAfter as Date).format('YYYY-MM-DD') : []
    searchParams.createdBefore = values?.createdBefore ? dayjs(values?.createdBefore as Date).format('YYYY-MM-DD') : []
  })
  const { isLoading, execute: fetchUserList } = useAsyncState(
    async () => {
      const { data, total, pageCount } = await getUserList({
        page: page.value,
        itemsPerPage: itemsPerPage.value,
        search: searchTextField.value as string | undefined,
        sortBy: sortBy.value,
        ...(searchParams?.status?.length && {
          status: searchParams.status as string | undefined,
        }),
        ...(searchParams?.createdAfter?.length && {
          createdAfter: searchParams.createdAfter as string | undefined,
        }),
        ...(searchParams?.createdBefore?.length && {
          createdBefore: searchParams.createdBefore as string | undefined,
        }),
      })
      totalItems.value = total
      userList.value = data
      totalPages.value = pageCount
    },
    null,
    {
      immediate: true,
      onError: errorHandle,
    },
  )

  watch(() => searchParams, () => {
    fetchUserList()
  }, { deep: true })

  return {
    itemsPerPage,
    headers,
    userList,
    searchParams,
    totalItems,
    totalPages,
    updateParams,
    isLoading,
    fetchUserList,
    searchTextField,
    createdAfter,
    createdBefore,
    status,
    page,
    changePage,
    onSearch,
    resetSearch,
    optionsStatus,
    sortBy,
    changeSort,
    changeStatus,
  }
})
