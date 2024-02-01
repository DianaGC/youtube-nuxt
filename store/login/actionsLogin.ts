import { auth } from '~/plugins/firebase.js';
import { CustomError } from '../interfaces/error.interface';

export const singIn = async ({ commit }: any, { email, password }: { email: string, password: string }) =>{
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        commit('setUser', userCredential.user?.email);
    } catch (error) {
        const customError = error as CustomError;
        console.error('Error al realizar la solicitud:', customError.message);
    }
}

export const singOut = async ({ commit }: any) => {
    try {
        await auth.signOut();
        commit('setUser', null);
    } catch (error) {
        const customError = error as CustomError;
        console.error('Error al realizar la solicitud:', customError.message);
    }
}