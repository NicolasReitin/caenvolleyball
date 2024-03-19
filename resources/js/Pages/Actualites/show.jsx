import React from 'react'
import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head, Link } from '@inertiajs/react'
import moment from 'moment'
import MainPhoto from '@/Components/header/MainPhoto'
import '../../../sass/actualites.scss'  


export default function show({ actu }) {
    console.log(actu.photo);
  return (
    <>
        <Head title="Actualités" />

        <Header />

        <section>
            <h1>{ actu.titre }</h1>
            <div className='card-actu' key={actu.id}>
                <div className='relative'>
                    <img src={actu.photo} alt="" />
                    <div class="filtre-img"></div>
                </div>
                <h2>{ actu.titre }</h2>
                <h3>Le { moment(actu.created_at).locale('fr').format('DD/MM/YYYY') }</h3>
                <p className='content'>{ actu.content }</p>
            </div>
        </section>

        <Footer />

    </>
  )
}
