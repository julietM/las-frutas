import Link from "next/Link";
import React from 'react'

export default function primerpost() {
  return (
    <div>
    <h1>hola como estas</h1>
    <Link href="/">
      <a>volver al Inicio</a>
    </Link>
    <a href="/blog">Alcla al Inicio</a>
  </div>
  )
}
