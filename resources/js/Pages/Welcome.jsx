import Actualites from '@/Components/Actualites'
import Reseaux from '@/Components/Reseaux'
import Scores from '@/Components/Scores'
import Navbar from '@/Layouts/Navbar'
import React from 'react'

export default function Welcome() {
  return (
    <>
        <Navbar />

        <Scores />

        <Actualites />

        <Reseaux />



    </>
  )
}
