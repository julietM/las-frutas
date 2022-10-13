import Link from "next/Link";
import React from 'react'
import styles from '../styles/blog.module.css';


export default function blog() {
  return (
    <div className={styles.container}>
      <h1>Las frutas</h1>
     

       <nav className={styles.navegacion}>
      <Link href="/inicio">
      <a>inicio</a>
              </Link>
      
      <Link href="/about">
      <a>una imagen</a></Link>

      <Link href="/blog">
      <a>la fruta</a></Link>

      <Link href="/contacto">
      <a>contacto</a></Link>
      </nav>
 
      <p>Las frutas son los órganos reproductivos producidos por las plantas florales que contienen semillas.
       Entonces, una fruta es básicamente un ovario agrandado que se desarrolla después de que la flor ha
        sido polinizada. Las semillas se desarrollan y las partes de las flores se caen, dejando la fruta 
        inmadura que madura gradualmente.</p>
        
    </div>
    
  )
}
