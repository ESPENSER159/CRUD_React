import Image from 'next/image';
import iconLogin from '../../src/iconLogin.png';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function Login( { setToken } ) {

    // React hook form - para validar formularios
    const { register, handleSubmit, formState: { errors }} = useForm();

    // Accion cuando se envia el formulario
    const onSubmit = (data) => {
        //console.log(data);
        enviarDatos(data);
    };

    // Estado para mostrar mensaje de 'usuario incorrecto'
    const [login, setLogin] = useState('');

    // Consultar DB usuario y contraseña ingresados
    async function enviarDatos( data ) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("LOGIN", data.user);
        urlencoded.append("PASSWORD", data.pass);

        const resp = await fetch('http://api.artemisa.v2.com/users?login=true', {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        })

        const json = await resp.json();
        console.log(json)

        // Si la consulta es correcta
        if ( json.status === 200 ) {

            // Almacenar Usuario en sessionStorage
            sessionStorage.setItem('user', json.results[0].LOGIN)
            // Almacenar Token en sessionStorage
            setToken(json.results[0].USER_MOVISTAR);
            // Recargar pagina
            window.location.reload();
            

            setLogin();
        } else {
            setLogin(<p className='notifiAlert'>Usuario o contraseña incorrectos</p>);
        }
        
    } 

    return (
        <section className="h-100">
        <div className="container h-100">
            <div className="content row justify-content-center">
                <div className="contentLogin col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="text-center my-5">
                        <Image src={iconLogin} alt="Logo Interactivo" width={150} height={150}></Image>
                    </div>
                    <div className="loginBox card shadow-lg">
                        <div className="card-body p-5">
                            <form onSubmit={handleSubmit(onSubmit)}
                            className="">
                                <div className="mb-3">
                                    <label className="mb-2 text-muted">Usuario</label>
                                    <input id="user" type="text" className="form-control" name="user" {...register("user", {required: true, minLength: 3})}></input>
                                    {errors?.user?.type === "required" && <p className='notifiAlert'>Campo requerido</p>}
                                    {errors?.user?.type === "minLength" && (
                                        <p className='notifiAlert'>3 caracteres minimo</p>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label className="text-muted">Contraseña</label>
                                    </div>
                                    <input id="password" type="password" className="form-control" name="password" {...register("pass", {required: true, minLength: 3})}></input>
                                    {errors?.pass?.type === "required" && <p className='notifiAlert'>Campo requerido</p>}
                                    {errors?.pass?.type === "minLength" && (
                                        <p className='notifiAlert'>3 caracteres minimo</p>
                                    )}
                                </div>

                                <div className="d-flex align-items-center">
                                    
                                    <button type="submit" className="btn btn-primary ms-auto">
                                        Iniciar Sesion
                                    </button>
                                </div>
                                <br></br>
                                <div className="text-center">
                                    {login}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}