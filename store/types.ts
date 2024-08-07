import { z } from "zod";
import { ZFormSignUp,ZFormSignIn, ZPhone, ZEmail, ZName } from "./zod"

export type FormSignUp = z.infer<typeof ZFormSignUp>;
export type FormSignIn = z.infer<typeof ZFormSignIn>;

export type Session = {
  session: boolean,
  setSession: () => void
}
export type User = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  setFirstName: (name:string) => void,
  setEmail: (name:string) => void,
  setLastName: (name:string) => void,
  setPhoneNumber: (name:string) => void,
}

export type Phone = z.infer<typeof ZPhone>
export type Email = z.infer<typeof ZEmail>
export type Name = z.infer<typeof ZName>
