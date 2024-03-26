import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head } from '@inertiajs/react'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Planning() {
  return (
    <>
        <Head title='Historique' />

        <Header />

        <section>
            <h1>Historique du Caen Volley Ball</h1>
            <div className='historique'>
                <img src="/assets/images/divers/historique.png" alt="" />
            </div>
        </section>


        <Footer />
    </>
  )
}
