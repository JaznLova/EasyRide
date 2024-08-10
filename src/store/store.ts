import { create } from "zustand";
import { Session, User } from "./types";

export const useSessionStore = create<Session & User>((set) => ({
  session: false,
  setSession: () => { set(state => ({ session: !state.session })) },
  //
  firstName: '',
  lastName: '',
  phoneNumber: '',
  setFirstName: (str) => { set(state => ({ firstName: str })) },
  setLastName: (str) => { set(state => ({ lastName: str })) },
  setPhoneNumber: (str) => { set(state => ({ phoneNumber: str })) },
}))
