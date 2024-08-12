import { z } from "zod";
export const ZPhone = z.object({
  phoneNumber: z.string().min(10, 'Enter Valid Number').max(10, 'Enter Valid Number')
})
export const ZName = z.object({
  firstName: z.string().min(3).max(12),
  lastName: z.string().min(3).max(12),
})
export const ZSession = z.object({
  session: z.boolean().default(false)
})
// export const ZLocation = 