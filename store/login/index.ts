import { singIn, singOut } from './actionsLogin';

export interface ILoginState{
  user: string
}

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser:(state: ILoginState, user: string) => state.user = user
  },
  actions: {
    signIn: singIn,
    signOut: singOut
  }
}