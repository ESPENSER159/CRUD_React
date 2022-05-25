import Link from 'next/link';

export default function navBar() {

    // Si se da clic en 'Cerrar Sesion'
    const logout = () => {
        // Elimina Item almacenados en sessionStorage
        sessionStorage.clear();
        // Recargar pagina
        window.location.reload('/');
    }

    return(
        <nav className="navbar navbar-expand navbar-light">
            <div className="nav navbar-nav">
                <Link href="/">
                    <a className="nav-item nav-link active">INICIO</a>
                </Link>
                
                <Link href="/home/Crear">
                    <a className="nav-item nav-link">Crear Empleado</a>
                </Link>
            </div>
            <div className="col navbar-nav logout">
                <button className="btn logoutBtn" onClick={logout}>Cerrar Sesion</button>
            </div>
        </nav>
    );
}