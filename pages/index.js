import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import dataUsuarios from '/data/usuarios.json';
import Head from 'next/head';


const Login = () => {

  const [error, setError] = useState('');
  const [email, setEmail] = useState(''); // almacenar email
  const [contrasena, setContrasena] = useState(''); //almacenar contraseña
  const [usuarios, setUsuarios] = useState(dataUsuarios.usuarios); // almacener datos de usuarios

  const router = useRouter();

  const handleChangeUsuario = (event) => {//funcion para obtener el valor de input
    setEmail(event.target.value);
  }

  const handleChangeContrasena = (event) => {//funcion para obtener el valor del input (contraseña)
    setContrasena(event.target.value);
  }

  const handleSubmit = (event) => {//funcion para detectar/manejar el envio del formulario
    event.preventDefault();

    const usuario = usuarios.find((persona) => persona.usuario === email && persona.contrasena === contrasena);//buscar en la lista de datos

    if (usuario) {//contraseña y usuario correctos
      router.push("/principal");
    }

    if (contrasena === ""  || email === "") {//no se llenan los campos de email/contraseña
      setError("Ingrese sus datos");
    }

    if (!usuario) {//usuario incorrecto
      setError("Usuario o contraseña incorrectos");
    }

  };

  return (
    <>

      <Head>
        <link rel='stylesheet' href="/login.css"/>
      </Head>


      <img className='logo' src='/medios/cafunis1.png' alt="cafeunis"/>


      <form className='login-container' onSubmit={handleSubmit}>
      {error && <div className='error'>{error}</div>}

        <label>
          <input
          type='email'
          name = 'usuario'
          placeholder='usuario'
          onChange={handleChangeUsuario}/>
        </label>

        <label>
          <input
          type='password'
          name = 'contrasena'
          placeholder='contraseña'
          onChange={handleChangeContrasena}/>
        </label>
        <button type='submit'>Iniciar sesión</button>
      </form>

      <img className='logo-2' src='/medios/UNIS-logo+transparente+(1).png' alt='Universidad del Istmo'/>
    </>
  )
}

export default Login;
