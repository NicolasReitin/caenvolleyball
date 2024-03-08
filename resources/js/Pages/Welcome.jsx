import Actualites from '@/Components/Actualites'
import Reseaux from '@/Components/Reseaux'
import Scores from '@/Components/Scores'
import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

export default function Welcome() {
  return (
    <>
        <Header />

        <Scores />

        <Actualites />

        <Reseaux />

        <Footer />

    </>
  )
}
