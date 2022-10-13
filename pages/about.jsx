import React from 'react'
import Image from 'next/image'
import Head from 'next/head';
import styles from '../styles/about.module.css';

export default function about() {
  return (
    <div className={styles.container}>
    <Head>
        <title>la fruta</title>
        <meta name='description' content='descripcion de la pagina'></meta>
    </Head>
      <h1>la fruta</h1>

      <Image src="/img/fruta.jpeg"
       width={320}
        height={300}
        alt="mi perfil">               
        </Image>
        <p>la furta es salud como cuerpo, arterias y venas</p>    
          </div>
         
  )
}
