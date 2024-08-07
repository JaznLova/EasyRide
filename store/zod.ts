import { z } from 'zod'

export const ZFormSignUp = z.object({
  firstName: z.string().min(3).max(12),
  lastName: z.string().min(3).max(12),
  email: z.string().email(),
  phoneNumber: z.string().min(10, 'Enter Valid Number').max(10, 'Enter Valid Number')
});
export const ZFormSignIn = z.object({
  email: z.string().email(),
  phoneNumber: z.number().min(10).max(10).positive().finite(),
});

export const ZPhone = z.object({
  phoneNumber: z.string().min(10, 'Enter Valid Number').max(10, 'Enter Valid Number')
})
export const ZEmail = z.object({
  email: z.string().email(),
})
export const ZName = z.object({
  firstName: z.string().min(3).max(12),
  lastName: z.string().min(3).max(12),
})