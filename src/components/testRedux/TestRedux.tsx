import { useAppDispatch, useAppSelector } from "hooks/hooks"
import { useEffect } from "react";
import { useState } from "react"
import { authStartLogin } from '../../actions/auth';


export const TestRedux = () => {

    const { userId } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        dispatch(authStartLogin({
            email: 'angi_ed01@hotmail.com',
            password: '123456'
        }))
    }, [])

    useEffect(() => {
        setIsLogged(userId !== null);
    }, [userId])


    return (
        <div>
            <h1>{isLogged ? "Logged" : "No logged"}</h1>
        </div>
    )
}
