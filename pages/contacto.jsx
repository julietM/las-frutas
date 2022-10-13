import React from 'react'
import styles from '../styles/contacto.module.css';

export default function contacto() {
  return (
    <div>
      <h3 className={styles.container}> Contacto</h3>
     <form className={styles.from}action='/send-data-here' method='post'>

     <label className={styles.label} for="first">Nombre:</label>
     <input type="text" id="first" name="first"/>
     
     <label className={styles.label}for="first">Email :</label>
     <input type="email" id="email" name="first"/>

     <input className={styles.boton}type="sumbit" value="Enviar datos"></input>

     </form>


      
      
    </div>
  )
}
