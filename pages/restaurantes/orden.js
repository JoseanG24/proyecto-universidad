import React, { useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";

const Carrito = ({items, setItems}) => {


  const [mostrarCarrito, setMostrarCarrito] = useState(false);//estado para mostrar el carrito

  const calcularTotal = () => {//funcion para calcular el total
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += parseInt(items[i].precio);
    }
    return total;
  }

  const removerItems = (index) => {//funcion para quitar items de la lista
    const nuevaLista = [...items];
    nuevaLista.splice(index,1);
    setItems(nuevaLista);
  }

  const renderButton = () => {//funcion para renderizar boton en el DOM si se agrega un item
    if (calcularTotal() > 0) {
      return (
        <Link href="./pago">
          <button id="Confirmar">Confirmar</button>
        </Link>
      )
    }
  }

  const toggleCarrito = () => {//funcion para cuando se presione el boton que tiene un carrito de compras
    setMostrarCarrito(!mostrarCarrito);
    const carritoElement = document.getElementById("carrito");//variable para guardar el carrito
    if (mostrarCarrito) {
      carritoElement.classList.remove("carrito-1");
      carritoElement.classList.add("carrito-none");
    } else {
      carritoElement.classList.remove("carrito-none");
      carritoElement.classList.add("carrito-1");
  }
  }
 
  return (
    <>
    <Head>
      <link rel="stylesheet" href="/carrito.css"/>
    </Head>

    <button onClick={toggleCarrito} className="carrito-2">
      <img src="/medios/carro.png" alt="carrito"/>
    </button>

    <div id="carrito" className="carrito-1">
      <div id="contenido">
      <h2>Tu orden: </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.nombre} - Q{item.precio}.00</h3>
            <button id="eliminar" onClick={() => removerItems(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h3>Total: Q{calcularTotal()}.00</h3>
      {renderButton()}
      </div>
    </div>

  </>
  )
}


export default Carrito;
