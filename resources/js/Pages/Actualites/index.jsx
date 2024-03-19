import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head, Link } from '@inertiajs/react'
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
            <h1 className='text-center text-5xl'>ACTUALITÉS</h1>
            <div className='cards'>
                {
                    actualites.data.map((actu)=> (
                        <div className='card' key={actu.id}>
                            <div className='relative'>
                                <img src={actu.photo} alt="" />
                                <div class="filtre-img"></div>
                            </div>
                            <h2>{ actu.titre }</h2>
                            <h3>Le { moment(actu.created_at).locale('fr').format('DD/MM/YYYY') }</h3>
                            {/* <p className='content'>{ actu.content }</p> */}
                        </div>
                    ))
                }
            </div>
            {/* Afficher la pagination avec <Link> */}
            <div className='flex justify-center gap-8'>
                {actualites.prev_page_url && (
                    <>
                        <ButtonGold
                            href = {actualites.prev_page_url}
                            classNameButton = 'button-next-previous' 
                            content = {
                                <>
                                    <img src="assets/icones/left.png" alt="next" />
                                </>
                            }
                        />
                        {/* <Link href={actualites.prev_page_url}>Précédent</Link> */}
                    </>
                )}
                {actualites.next_page_url && (
                    <>
                        <ButtonGold
                            href = {actualites.next_page_url}
                            classNameButton = 'button-next-previous' 
                            content = {
                                <>
                                    <img src="assets/icones/right.png" alt="next" />
                                </>
                            }
                        />
                    </>
                )}
            </div>
        </section>


        <Footer />

    </>
  )
}


