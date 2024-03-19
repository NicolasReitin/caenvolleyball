import '../../sass/welcome.scss'  

import Header from '@/Layouts/Header'
import Scores from '@/Components/Scores'
import MainPhoto from '@/Components/header/MainPhoto'
import Actualites from '@/Components/Actualites'
import Reseaux from '@/Components/Reseaux'
import Footer from '@/Layouts/Footer'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Welcome({auth, firstActu, othersActu}) {
  return (
    <>
    {/* {console.log(auth)} */}
        <Head title="Accueil" />

        <Header />

        <MainPhoto 
          src='/assets/images/cover.jpg'
          alt={"Caen Volley Ball Photo"}
          className={'main-photo-cover'}
        />

        <Scores />

        <Actualites 
          firstActu={firstActu}
          othersActu={othersActu}
        />

        <Reseaux />

        <Footer />

    </>
  )
}
