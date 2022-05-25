
import Listar from './Listar';
import NavBar from './NavBar';

export default function Home() {
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <div className='container'>
                <Listar />
            </div>
        </div>
    );
}