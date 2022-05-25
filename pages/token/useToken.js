import { useState } from 'react';

export default function useToken() {

    // Obtener el Token
    const getToken = () => {
        if(typeof window !== 'undefined') {
            const tokenString = sessionStorage.getItem('token');
            return tokenString;
        } 
    }

    // Enviar estado segun si existe Token
    const [token, setToken] = useState(getToken());

    // Guardar Token
    const saveToken = userToken => {
        sessionStorage.setItem('token', userToken);
        setToken(useToken.token);
    }

    return {
        setToken: saveToken,
        token
    }
}