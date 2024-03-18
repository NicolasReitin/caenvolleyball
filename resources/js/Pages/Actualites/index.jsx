import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head } from '@inertiajs/react'
import React from 'react'

import '../../../sass/actualites.scss'  


export default function index({ auth, actualites }) {
  return (
    <>
        <Head title="Accueil" />

        <Header />
        
        <div class="parent">
            <div class="div1">
                {
                    actualites.map((actu)=> (
                        <div key={actu.id}>
                            <h2>{ actu.titre }</h2>

                        </div>
                    ))
                }
            </div>
        </div> 


        <Footer />

    </>
  )
}


