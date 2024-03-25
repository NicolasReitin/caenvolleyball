import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

import '../../../sass/equipes.scss'  
import ButtonGold from '@/Components/ButtonGold'
import Scores from '@/Components/Scores'


export default function index( {equipe, staff} ) {
  console.log(staff);
  const joueurs = equipe.joueurs

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
                {
                  equipe.id === 1 ? (
                    <>
                      <img src={staff[1].photo} alt="" />
                      <h3>{staff[1].nom + ' ' + staff[1].prenom}</h3>
                    </>
                  ) : (
                    <>
                      <img src="/assets/images/no-player.png" alt="" />
                      <h3>NICOLAS PANIER</h3>
                    </>
                  )
                } 
                
              </div>
            </div>
          </div>
        </section>



        <Footer />
    </>
  )
}
