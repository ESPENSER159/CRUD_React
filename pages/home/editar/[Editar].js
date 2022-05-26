import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '../NavBar';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

export default function Editar() {
  let router = useRouter();
  const id = router.query.Editar;
  console.log(router.query.Editar)
  console.log(id)
  const [empleado, setEmpleado] = useState([]);

  // React hook form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    enviarDatos(empleado.id, data.nombre, data.correo);
  };

  const getDatos = async () => {
    const data = await fetch('http://10.222.0.7/empleados/?consultar=' + id);
    const user = await data.json();
    setEmpleado(user[0]);
  }

  useEffect(() => {
    getDatos();
  }, [])

  function enviarDatos(id, nombre, correo) {
    console.log(`Nombre: ${nombre} \nCorreo: ${correo}`);

    var datosEnviar = { id: id, nombre: nombre, correo: correo };

    fetch('http://10.222.0.7/empleados/?actualizar=1', {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then(respuesta => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        console.log('Formulario enviado.');
        router.push("/");
      })
      .catch(console.log)
  }

  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <div className='container'>
        <div className="card">
          <div className="card-header">
            Editar Empleados
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {empleado.id}
              <div className="form-group">
                <label htmlFor="">Nombre:</label>
                <input type="text" name="nombre" id="nombre" className="form-control" placeholder={empleado.nombre} aria-describedby="helpId" {...register("nombre", { required: true, maxLength: 50 })} />
                <small id="helpId" className="text-muted">Escribe el nombre del empleado</small>
                {errors?.nombre?.type === "required" && <p className='notifiAlert'>Campo requerido</p>}
                {errors?.nombre?.type === "maxLength" && (
                  <p className='notifiAlert'>50 caracteres maximo</p>
                )}
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="">Correo:</label>
                <input type="text" name="correo" id="correo" className="form-control" placeholder={empleado.correo} aria-describedby="helpId" {...register("correo", { required: true, maxLength: 60, minLength: 5 })} />
                <small id="helpId" className="text-muted">Escribe el correo del empleado</small>
                {errors?.correo?.type === "required" && <p className='notifiAlert'>Campo requerido</p>}
                {errors?.correo?.type === "maxLength" && (
                  <p className='notifiAlert'>50 caracteres maximo</p>
                )}
                {errors?.correo?.type === "minLength" && (
                  <p className='notifiAlert'>5 Caracteres minimo</p>
                )}
              </div>
              <br></br>
              <div className="btn-group" role="group" aria-label="">
                <button className="btn btn-success">Editar empleado</button>
                <Link href='/'>
                  <a type="button" className="btn btn-primary">Cancelar</a>
                </Link>
              </div>
            </form>
          </div>
          <div className="card-footer text-muted">
          </div>
        </div>
      </div>
    </div>
  );
}