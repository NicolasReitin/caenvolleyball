import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Head } from '@inertiajs/react'
import React from 'react'

import '../../../sass/equipes.scss'  


export default function index( {equipe, coachs} ) {
  console.log(coachs);
  const joueurs = equipe.joueurs

  return (
    <>
        <Head title={equipe.nom} />

        <Header />

        {equipe.photo && (
          <div>
            <img 
              src={equipe.photo} 
              alt="Photo d'équipe"
              className='team' 
            />
          </div>
          )
        }
        
        <section>
          <h1>{equipe.nom}</h1>
          <h2>{equipe.division}</h2>

          <div className='players-cards'>
            {joueurs &&(
              joueurs.map((joueur) => (
                <div key={joueur.id} className='player-card'>
                  <img src={joueur.photo} alt="" />
                  <h3>{joueur.nom+ ' '+ joueur.prenom}</h3>
                </div>
              ))
            )
            }
          </div>
          <hr />
          <div className='coach-card'>
            {coachs && coachs.length > 0 &&(
              <>
                <h2 className='mt-2'>Coachs</h2>
                <div className="flex justify-center">
                  {
                  coachs.map((coach) => (
                    <div key={coach.id}>
                      {coach.photo ?(
                        <img src={coach.photo} alt="" />
                        ) : (
                        <img src="/assets/images/no-player.png" alt="" />
                        )
                      }                    
                      <h3>{coach.nom + ' ' + coach.prenom}</h3>
                    </div>
                  ))
                  }                
                </div>
              </>
            )}
          </div>
        </section>



        <Footer />
    </>
  )
}
