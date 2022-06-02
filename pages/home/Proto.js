import Image from 'next/image';
import iconAgent from '../../src/icons/iconAgent.svg';
import iconChats from '../../src/icons/iconChats.svg';
import ilusResume from '../../src/ilustrations/resume.svg';
import ilusJobHunt from '../../src/ilustrations/job_hunt.svg';

export default function proto() {
  return (
    <div className="row proto">

      <div className="col col-2 protoMenu">

        <div className="row row-cols-2 menuTop">
          <div className="col-5 menuTopIcon">
            <div className="col">
              <Image src={iconAgent} alt="Logo Interactivo" width={50} height={50}></Image>
            </div>
          </div>
          <div className="col-7 menuTopText">
            <div>
              <div className="col-12 textName">
                <p>Edwin Caro</p>
              </div>
              <div className="col-12 textTipo">
                <p>Agente</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row menuCenter">
          <div className='row menuCenterContent'>

            <div className='row item'>
              <div className="col-3 icon">👍</div>
              <div className="col text">Inicio Sesion: 8:05 AM</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">📞</div>
              <div className="col text">Seguimiento de Venta</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">📋</div>
              <div className="col text">Registro agendados</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">❗</div>
              <div className="col text">Novedades</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">📌</div>
              <div className="col text">Estados</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">👍</div>
              <div className="col text">Inicio Sesion: 8:05 AM</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">📞</div>
              <div className="col text">Seguimiento de Venta</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">📋</div>
              <div className="col text">Registro agendados</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">❗</div>
              <div className="col text">Novedades</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">📌</div>
              <div className="col text">Estados</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">👍</div>
              <div className="col text">Inicio Sesion: 8:05 AM</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">📞</div>
              <div className="col text">Seguimiento de Venta</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">📋</div>
              <div className="col text">Registro agendados</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">❗</div>
              <div className="col text">Novedades</div>
            </div>

            <div className='row item'>
              <div className="col-3 icon">📌</div>
              <div className="col text">Estados</div>
            </div>

          </div>
        </div>

        <div className="row menuEnd">
          <Image src={ilusJobHunt} alt="Logo Interactivo" width={200} height={200} />
        </div>
      </div>


      <div className="col protoGestion">
        <div className='row protoGestionTitle'>
          <div className="col-3 icon">
            <Image src={ilusResume} width={200} height={200} />
          </div>
          <div className='col text'>Hola hablas con (xxxxx)</div>
        </div>
        <div className="row protoGestionTipi">
          <div className='col'>Tipificación</div>
        </div>
      </div>
    </div>
  );
}