import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head } from '@inertiajs/react'
import React from 'react'
import moment from 'moment';


import '../../../sass/actualites.scss'  
import ButtonGold from '@/Components/ButtonGold';


export default function index({ auth, actualites }) {
  return (
    <>
        <Head title="Actualités" />

        <Header />
        
        <section>
            <h1 className='text-center text-5xl'>Actualités</h1>
            <div className='cards flex flex-wrap'>
                {
                    actualites.map((actu)=> (
                        <div className='card' key={actu.id}>
                            <img src={actu.photo} alt="" />
                            <h3>Le { moment(actu.created_at).locale('fr').format('DD/MM/YYYY') }</h3>
                            <h2>{ actu.titre }</h2>
                            <p className='content'>{ actu.content }</p>
                            <div className='flex justify-center'>
                                <ButtonGold
                                    href = '#'
                                    classNameButton = 'button-voir-plus' 
                                    content = "Voir +"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>


        <Footer />

    </>
  )
}


