import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head } from '@inertiajs/react'
import React from 'react'

import '../../../sass/equipes.scss'  


export default function index( {equipe} ) {

  const joueurs = equipe.joueurs
  console.log(joueurs);

  return (
    <>
        <Head title={equipe.nom} />

        <Header />
        
        <section>
          <h1>{equipe.nom}</h1>
          <h2>{equipe.division}</h2>
          
          <div className='players-cards'>
            {
              joueurs.map((joueur) => (
                <div key={joueur.id} className='player-card'>
                  <img src={joueur.photo} alt="" />
                  <h3>{joueur.nom+ ' '+ joueur.prenom}</h3>
                </div>
              ))
            }
          </div>
          <hr />
          <div className='coach-card'>
            <h2 className='mt-2'>Coachs</h2>
            <div className="flex justify-center">
              <div>
                <img src="/assets/images/no-player.png" alt="" />
                <h3>NICOLAS PANIER</h3>
              </div>
            </div>
          </div>
        </section>



        <Footer />
    </>
  )
}
