import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head } from '@inertiajs/react'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Organigramme() {
  return (
    <>
        <Head title='Organigramme' />

        <Header />

        <section>
            <h1>Organigramme du Caen Volley Ball</h1>
            <div className='organigramme'>
                <img src="/assets/images/divers/organigramme.png" alt="" />
            </div>
        </section>


        <Footer />
    </>
  )
}
