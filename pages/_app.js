// GOBAL RE-RENDER

// import App from 'next/app'
// CSS Global
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles.css';

import { useEffect } from 'react';
import Login from './login/index';
import useToken from './token/useToken';
import validateToken from './token/VerifyToken';

export default function MyApp({ Component, pageProps }) {

  const { token, setToken } = useToken();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  validateToken();

  if(!token){
    return (
        <Login setToken={ setToken }/>
    );
  }

  return (
    <Component {...pageProps} />
  );
}