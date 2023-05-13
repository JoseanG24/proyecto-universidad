import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from "/data/data.json";
import React from 'react';
import { useState } from 'react';
import Carrito from './orden'

const Rest3 = ({comidas , bebidas, refrescos}) => {

    const [itemOrden, setItemOrden] = useState([]);

    const agregarItem = (item) => {
      setItemOrden([...itemOrden, item]);
    }

    return (
    <>
        <header id="header">
          <title>Delypanes y Cafe</title>
          <h2>Delypanes y café</h2>
          <img src="https://unis.edu.gt/wp-content/uploads/2021/08/logo.svg"
             alt="Universidad del Istmo" className='logounis'/>
          <nav>
            <Link href='/principal' className='boton_nav'>Regresar</Link>
          </nav>
        </header>

        <main>

          <Carrito items={itemOrden} setItems={setItemOrden} />

          <h2>Comidas: </h2>

          {comidas.map((item,index) => (
            <>
              <div key={index} id={item.id_2}>
                <h3>{item.nombre}</h3>
                <h4>Q{item.precio}.00</h4>
                <p>{item.descripcion}</p>
                <button onClick={() => agregarItem(item)}>Agregar a orden</button>
              </div>
            </>
          ))}

          <h2>Bebidas: </h2>

          {bebidas.map((item_2,index_2) => (
            <>
              <div key={index_2} id={item_2.id_2}>
                <h3>{item_2.nombre}</h3>
                <h4>Q{item_2.precio[0]}.00,
                   Q{item_2.precio[1]}.00
                </h4>
                <p>{item_2.descripcion}</p>
                <button onClick={() => agregarItem(item_2)}>Agregar a orden</button>
              </div>
            </>
          ))}

          <h2>Refrescos: </h2>

          {refrescos.map((item_3,index_3) => (
            <>
              <div key={index_3 + "3" } id={item_3.id_2}>
                <h3>{item_3.nombre}</h3>
                <h4>Q{item_3.precio}.00</h4>
                <p>{item_3.descripcion}</p>
                <button onClick={() => agregarItem(item_3)}>Agregar a orden</button>
              </div>
            </>
          ))}

        </main>
    </>
    )
}

export default Rest3;

export async function getStaticProps() {
  const comidas = data.restaurantes[2].comidas;
  const bebidas = data.restaurantes[2].bebidas;
  const refrescos = data.restaurantes[2].refrescos;

  return {
    props: {
      comidas,
      bebidas,
      refrescos,
    },
  }
}
