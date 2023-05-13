import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { useState } from 'react';

const Pago = () => {
  //declarar estado true o false (es decir si el pago fue realizado o no)
  const [pagoRealizado, setPagoRealizado] = useState(false);

  const registrarTarjeta = () => {
    //Omitir, no esta completada
  }

  const pagoTarjeta = () => { //Omitir, no esta completada
  //Omitir esta funcion por el momento
  }

  const mostrarBorroso = () => {//Función para que el fondo se muestre borroso

    document.querySelector('.main').classList.add('blur');//agregar el efecto borroso al <main> desde CSS
    document.querySelector('.Header').classList.add('blur');//agregar el efecto borroso al <Header> desde CSS

    setPagoRealizado(true);//Ya que el pago este realizado, cambiar la variable pagoRealizado a true
}

  const ocultarBorroso = () => {
    document.body.classList.remove('blur'); //Al presionar "regresar" quitar el efecto borroso
                                            
  }

    return (
        <>
        <Head>
          <link rel='stylesheet' href='/pago.css'/>
        </Head>

        <header id="header" className='Header'>
          <div className="logonombre">
            <h2 className="nombrecafeteria">Tu orden</h2>
          </div>
            <img src="/medios/cafunis1.png" alt="Universidad del Istmo" className='logocafeunis'/>
          <nav>
            <Link href='/principal' className='boton_nav'>Regresar</Link>
          </nav>
        </header>

        <div className='main'>
            <h2 className='titulosecciones' id='metododepago'>Método de pago</h2>
            <div className='texto_importante'>
              <h1>¡Último paso!</h1>
            </div>

            <div className='cartas_pago'>
              <div className='carta_de_pago'>
                <div className='titulo_cartas'>
                  <h3>Tarjeta de crédito</h3>
                </div>
                <img src='/medios/credit-card_icon-icons.com_64588.png' alt='tarjeta'/>
                <button className='boton_pago' onClick={mostrarBorroso}>Realizar pago</button>
              </div>
              <div className='carta_de_pago'>
                <div className='titulo_cartas'>
                  <h3>Efectivo</h3>
                </div>
                <img src='/medios/mbricash_99554.png' alt='cash' />
                <button className='boton_pago' onClick={mostrarBorroso}>Finalizar orden</button>
              </div>
            </div>

            <div className='texto_importante'></div>
        </div>

        {pagoRealizado && (
              <div className='compra_realizada' id="compra-realizada">
                <div className='compra_realizada_contenido'>
                  <h2>¡Gracias por tu compra!</h2>
                  <p className='texto-finalizado'>Te notificaremos cuando tu pedido este listo</p>
                  <Link href="/principal">
                    <button onClick={ocultarBorroso}>Regresar</button>
                  </Link>
                </div>
              </div>
              )}
        </>
    )
}

export default Pago;
