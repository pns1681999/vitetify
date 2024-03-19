import z from 'zod'
import { Gender, PatientStatus } from '@/configs/enum'

export const patientSchema = z.object({
  id: z.string(),
  clinicId: z.string(),
  name: z.string(),
  gender: z.nativeEnum(Gender),
  birthdate: z.string(),
  email: z.string(),
  telephone: z.string(),
  status: z.nativeEnum(PatientStatus),
  createdAt: z.string(),
  updatedAt: z.string(),
})
export const patientListResponseSchema = z.object({
  data: z.array(patientSchema),
  count: z.number(),
  total: z.number(),
  page: z.number(),
  pageCount: z.number(),
})

export const patientSearchSchema = z.object({
  searchTextField: z.string().optional().nullable(),
  createdAfter: z.date().optional().nullable(),
  createdBefore: z.date().optional().nullable(),
})
export type TPatient = z.infer<typeof patientSchema>
export type TPatientListResponse = z.infer<typeof patientListResponseSchema>
export type TPatientSearch = z.infer<typeof patientSearchSchema>
