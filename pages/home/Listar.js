import { Children, useState, useEffect } from 'react'
import Link from 'next/link'
import {API_URL} from '../general.js'

export default function Listar() {

  const [datosCargados, setDatosCargados] = useState(false);
  const [empleados, setEmpleados] = useState([]);

  function borrarRegistros(id) {
    console.log('Borrar: ' + id);

    fetch('http://10.222.0.7/empleados/?borrar=' + id)
      .then(respuesta => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        cargarDatos();
      })
      .catch(console.log)

  }

  function cargarDatos() {
    let token = sessionStorage.getItem('token');
    console.log(`${API_URL}/users?token=` + token)

    fetch(`${API_URL}/users?token=` + token)
      .then(respuesta => respuesta.json())
      .then((datosRespuesta) => {
        //console.log(datosRespuesta.results);
        setDatosCargados(true);
        setEmpleados(datosRespuesta.results);

      })
      .catch(console.log)
  }
  useEffect(() => {
    cargarDatos();
  }, []);

  function showList() {

    if (!datosCargados) {
      return <div>Cargando...</div>
    } else if (JSON.stringify(empleados).length == 15) {
      return (
        <div className="card">
          <div className="card-header">
            <Link href={'/home/Crear'}>
              <a className="btn btn-success">Agregar Nuevo Empleado</a>
            </Link>
          </div>
          <div className="card-body">
            <h4>Lista de Empleados</h4>
            <table className="table">
              <thead>
                <tr>
                  <th className='colID'>ID</th>
                  <th className='colName'>Nombre</th>
                  <th className='colMail'>Activo</th>
                  <th className='colAction'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan='4'>
                    <h4 className='emptyTable'>Sin Información</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted">

          </div>
        </div>
      );
    }
    else {
      return (
        <div className="card">
          <div className="card-header">
            <Link href="/home/Crear">
              <a className="btn btn-success">Agregar Nuevo Empleado</a>
            </Link>
          </div>
          <div className="card-body">
            <h4>Lista de Empleados</h4>
            <div className='containerTable'>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Login</th>
                    <th>Activo</th>
                    <th>Conectado</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    Children.toArray(
                      empleados.map(
                        (empleado) => (
                          <tr>
                            <td>{empleado.IDUSUARIO}</td>
                            <td>{empleado.NOMBRE}</td>
                            <td>{empleado.LOGIN}</td>
                            <td>{empleado.ACTIVO}</td>
                            <td>{empleado.CONECTADO}</td>
                          </tr>
                        )
                      )
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    showList()
  );
}