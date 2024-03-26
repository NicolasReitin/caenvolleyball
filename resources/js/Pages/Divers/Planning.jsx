import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head } from '@inertiajs/react'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Planning() {
  return (
    <>
        <Head title='Planning' />

        <Header />

        <section>
            <h1>Planning des entrainements</h1>
            <div className='planning'>
                <img src="/assets/images/divers/planning.jpg" alt="" />
            </div>
        </section>


        <Footer />
    </>
  )
}
