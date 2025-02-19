import { z } from 'zod'


export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  emailConfirmed: z.string(),
  passwordHash: z.string(),
})


export const AuthUserSchema = z.object({
  userId: z.string(),
  firstName: z.string().optional(),
  lastName: z.string(),
  roleName: z.string(),
  token: z.string(),
})


export const ApiListUsersCreateSchema = z.object({
  identificationNumber: z.string(),
  identificationTypeId: z.number(),
  fullName: z.string(),
  email: z.string(),
  address: z.string(),
  farmName: z.string().optional(),
  phoneNumber: z.string().optional(),
  legalNatureId: z.number().nullable(),
  statusId: z.number(),
  statusName: z.string(),
  meanAnswerId: z.number().nullable(),
  comercialActivityId: z.number().nullable(),
  customerInterestId: z.number().nullable()
})

export const createPaginationResponse = z.object({
  count: z.number(),
  pageIndex: z.number(),
  pageSize: z.number(),
  pageCount: z.number(),
  data: z.any()
}) 