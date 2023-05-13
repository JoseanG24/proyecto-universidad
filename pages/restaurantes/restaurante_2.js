import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '/data/data.json';
import React from 'react';
import { useState } from 'react';
import Carrito from './orden';

const Rest2 = ({desayunos , bebidasDesayunos , comidas, pizzas, smoothies}) => {

    const [itemOrden, setItemOrden] = useState([]);//arreglo de estado para los items

    const agregarItem = (item) => {//funcion para agregar items
      setItemOrden([...itemOrden,item]);
    }

    return (
    <>
        <header id="header">
          <title>Mix</title>
          <h2>Mix</h2>
          <img src="https://unis.edu.gt/wp-content/uploads/2021/08/logo.svg"
             alt="Universidad del Istmo" className='logounis'/>
          <nav>
            <Link href='/principal' className='boton_nav'>Regresar</Link>
          </nav>
        </header>

        <main>

        <Carrito items={itemOrden} setItems={setItemOrden} />

          <h2>Menú de desayuno: </h2>
          {desayunos.map((desayuno,index) => (
            <div key={index} id = {desayuno.id_2}>
              <h3>{desayuno.nombre}</h3>
              <h4>Q{desayuno.precio}.00</h4>
              <p>{desayuno.descripcion}</p>
              <button onClick={() => agregarItem(desayuno)}>Agregar a orden</button>
            </div>
          ))}

          <h2>Bebidas de desayuno: </h2>
          {bebidasDesayunos.map((bebida_d,index_2) => (
            <>
              <div key={index_2} id={bebida_d.id_2}>
                <h3>{bebida_d.nombre}</h3>
                <h4>Q{bebida_d.precio}.00</h4>
                <p>{bebida_d.descripcion}</p>
                <button onClick={() => agregarItem(bebida_d)}>Agregar a orden</button>
              </div>
            </>
          ))}

          <h2>Almuerzos: </h2>
          {comidas.map((comida,index_3) => (
            <>
              <div key={index_3} id={comida.id_2}>
                <h3>{comida.nombre}</h3>
                <h4>Q{comida.precio[0]}.00,
                   Q{comida.precio[1]}.00
                </h4>
                <p>{comida.descripcion}</p>
                <button onClick={() => agregarItem(comida)}>Agregar a orden</button>
              </div>
            </>
          ))}

          <h2>Pizzas</h2>
        {pizzas.map((pizza,index_4) => (
            <>
              <div key={index_4} id={pizza.id_2}>
                <h3>{pizza.nombre}</h3>
                <h4>Q{pizza.precio[0]}.00,
                   Q{pizza.precio[1]}.00
                </h4>
                <p>{pizza.descripcion}</p>
                <button onClick={() => agregarItem(pizza)}>Agregar a orden</button>
              </div>
            </>
          ))}

          <h2>Smoothies</h2>
          {smoothies.map((smoothie,index_5) => (
            <>
              <div key={index_5} id={smoothie.id_2}>
                <h3>{smoothie.nombre}</h3>
                <h4>Q{smoothie.precio[0]}.00,
                   Q{smoothie.precio[1]}.00
                </h4>
                <p>{smoothie.descripcion}</p>
                <button onClick={() => agregarItem(smoothie)}>Agregar a orden</button>
              </div>
            </>
          ))}

        </main>
    </>


    )
}

export default Rest2;

export async function getStaticProps() {
  const desayunos = data.restaurantes[1].desayunos;//lista de desayunos
  const bebidasDesayunos = data.restaurantes[1].bebidasDesayunos;//lista de bebidas de desayuno
  const comidas = data.restaurantes[1].comidas;//lista de comidas
  const pizzas = data.restaurantes[1].pizzas;//lista de pizzas
  const smoothies = data.restaurantes[1].smoothies;//lista de smoothies

  return {
    props: {
      desayunos,
      bebidasDesayunos,
      comidas,
      pizzas,
      smoothies,
    },
  }
}
