import { Dispatch } from 'redux';
import { types } from '../types/types';

interface UserFormData {
    email: string;
    password: string;
}

interface UserData {
    email: string;
    userId: string;
    name: string;
}


export const authStartLogin = (userData: UserFormData) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(authLogin({
                email: userData.email,
                name: 'Rikiki',
                userId: '123',
            }));
        }, 2000);
    }
}
export const authStartLogout = () => {
    return (dispatch: Dispatch) => {
        localStorage.clear()
        dispatch(authLogout())
    }
}

const authLogin = (userData: UserData) => ({
    type: types.authLogin,
    payload: userData,
})

const authLogout = () => ({
    type: types.authLogout,
})
