import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';
import data from '/data/data.json';
import React from 'react';
import { useState } from 'react';
import Carrito from './orden';

const Rest1 = ({comidas,bebidas,bebidasNaturales}) => {

  const [itemOrden, setItemOrden] = useState([]);//arreglo de estado para los items

  const agregarItem = (item) => { //funcion para agregar items al carrito
    setItemOrden([...itemOrden,item]);
  }

    return (
    <>
        <Head>
          <link rel='stylesheet' href='/gitane.css'/>
        </Head>

        <header id="header">
          <div class="logonombre">
            <img src="/medios/logogitane.png" alt="Café Gitane" class='logocafes'/>
            <h2 class="nombrecafeteria">Gitane</h2>
          </div>
          <img src="/medios/cafunis1.png" alt="Universidad del Istmo" class='logocafeunis'/>
          <nav>
            <Link href='/principal' className='boton_nav'>Regresar</Link>
          </nav>
        </header>

        <div className='main'>

        <Carrito items={itemOrden} setItems={setItemOrden}/>

         <h2 class="titulosecciones" id="titulocomidas">Comidas</h2>

          {comidas.map((comida,index1)=> (
            <>
                <div className='datoscomidas' key={index1} id={comida.nombre}>
                  <Image src={comida.imagen} alt = {comida.nombre}
                     width ={300} height={200} className='fotoscomidas'/>
                  <div className='nombre_precio'>
                    <h3>{comida.nombre}</h3>
                    <h4>Q{comida.precio}.00</h4>
                  </div>
                  <p className='descripcion'>{comida.descripcion}</p>
                  <button className='boton_agregar' onClick={() => agregarItem(comida)}>Agregar a orden</button>
                </div>
            </>
          ))}

        <h2 class="titulosecciones" id="titulobebidas">Bebidas</h2>

          {bebidas.map((bebida,index2) => (
            <>
              <div className='datoscomidas' key={index2} id={bebida.nombre}>
                <Image src={bebida.imagen} alt = {bebida.descripcion}
                    width ={242} height={200} className='fotoscomidas'/>
                <div className='nombre_precio'>
                  <h3>{bebida.nombre}</h3>
                  <h4>
                    Q{bebida.precio}.00
                  </h4>
                </div>
                <p className='descripcion'>{bebida.descripcion}</p>
                <button className='boton_agregar' onClick={() => agregarItem(bebida)}>Agregar a orden</button>
              </div>
            </>
          ))}

        <h2 className='titulosecciones' id='titulobebidasnaturales'>Bebidas Naturales</h2>

          {bebidasNaturales.map((bebida_n,index3) => (
            <>
              <div className='datoscomidas' key={index3} id={bebida_n.nombre}>
                 <Image src={bebida_n.imagen} alt = {bebida_n.descripcion}
                  width ={242} height={200} className='fotoscomidas'/>
                <div className='nombre_precio'>
                  <h3>{bebida_n.nombre}</h3>
                  <h4>Q{bebida_n.precio}.00</h4>
                </div>
                <p className='descripcion'>{bebida_n.descripcion}</p>
                <button className='boton_agregar' onClick={() => agregarItem(bebida_n)}>Agregar a orden</button>
              </div>
            </>
          ))}

          <img src="https://unis.edu.gt/wp-content/uploads/2021/08/logo.svg"
          alt="Universidad del Istmo" class='logounis'/>

        </div>
    </>


    )
}

export default Rest1;

export async function getStaticProps() {
  const comidas = data.restaurantes[0].comidas;//lista de comidas
  const bebidas = data.restaurantes[0].bebidas;//lista de bebidas
  const bebidasNaturales = data.restaurantes[0].bebidasNaturales;//lista de bebidas naturales

  return {
    props: {
      comidas,
      bebidas,
      bebidasNaturales,
    },
  }
}
