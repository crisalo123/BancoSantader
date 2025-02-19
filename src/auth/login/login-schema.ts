import { z } from 'zod'

export const loginSchema = z.object({
  identificationNumber: z.number().or(z.string().min(1, 'Ingrese el numero de documento')),
  username: z.string().min(1, 'El nombre de usuario es obligatorio'),
  password: z.string().min(1, 'La contraseña es obligatoria'),
  recoveryNumber: z.boolean().optional()
})
export type Login = z.infer<typeof loginSchema>
