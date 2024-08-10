import {z} from 'zod'
import { ZPhone,ZName,ZSession } from './zod'

export type Session = {
  session: boolean,
  setSession: () => void
}
export type User = {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  setFirstName: (name:string) => void,
  setLastName: (name:string) => void,
  setPhoneNumber: (name:string) => void,
}

export type Phone = z.infer<typeof ZPhone>
export type Name = z.infer<typeof ZName>