import { useState } from "react";

export default function validateToken() {

  if (typeof window !== 'undefined') {

    const [validToken, setValidToken] = useState(false);

    // Validar si existe un Token en sessionStorage
    if (sessionStorage.getItem('token') == null) {
      sessionStorage.clear();
    } else {
      let getToken = sessionStorage.getItem('token');
      let getUser = sessionStorage.getItem('user');

      // Validar si el token esta vigente
      async function validated(getUser, getToken) {
        // Consultar Token en DB
        const resp = await fetch('http://api.artemisa.v2.com/users?linkTo=LOGIN&equalTo=' + getUser + '&token=' + getToken, {
          method: 'GET',
          redirect: 'follow'
        })

        // Respuesta del fetch
        const json = await resp.json();

        // Validar si el Token de DB es igual del almacenado en sessionStorage
        if (json.results[0].USER_MOVISTAR === getToken) {
          console.log("------------------------\n|    Token Valido      |\n------------------------");
          setValidToken(true)
        } else {
          console.log("------------------------\n|  Token No Valido     |\n------------------------");
          setValidToken(false)
          sessionStorage.clear();
          window.location.reload();
        }
      }

      validated(getUser, getToken);

    }
    return validToken;
  }
}