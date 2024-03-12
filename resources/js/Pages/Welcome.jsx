import Actualites from '@/Components/Actualites'
import Reseaux from '@/Components/Reseaux'
import Scores from '@/Components/Scores'
import MainPhoto from '@/Components/header/MainPhoto'
import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Welcome({auth}) {
  return (
    <>
    {console.log(auth)}
        <Head title="Accueil" />

        <Header />

        <MainPhoto />

        <Scores />

        <Actualites />

        <Reseaux />

        <Footer />

    </>
  )
}
