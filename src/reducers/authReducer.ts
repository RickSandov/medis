import { types } from '../types/types';

interface AuthState {
    userId: string | null;
    email: string | null;
    name: string | null;
}

const initialState: AuthState = {
    userId: null,
    email: null,
    name: null,
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                userId: action.payload.userId,
                email: action.payload.email,
                name: action.payload.name,
            }

        case types.authLogout:
            return {
                ...state,
                loading: false,
                error: null,
                user: null,
            }

        default:
            return state;
    }
}
