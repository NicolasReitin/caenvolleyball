import { Link } from '@inertiajs/react'
import React from 'react'
import ButtonGold from './ButtonGold'

export default function Actualites() {
  return (
    <>
        <div className="actualites">
          <h2>LES ACTUALITÉS</h2>
          <div className="flex justify-center mt-10">
            <div className="first-actu">
              <Link href='#'>
                <div className='relative'>
                    <img src="/assets/images/teamN3-3.jpg" alt="" />
                    <div class="filtre-img"></div>
                </div>
                <p className='ml-5 mt-1'>Le 07 mars 2024</p>
                <h3 className='ml-5 mt-1'><strong>Titre de l'article</strong></h3>
              </Link>
            </div>
            <div className="others-actu flex flex-col gap-2 mt-8 ml-5">
                <div className='block-others-actus'>
                    <Link href='#' >
                        <p className='ml-3'>Le 07 mars 2024</p>
                        <h3 className='ml-3 mt-2'><strong>Titre de l'article</strong></h3>
                    </Link>
                </div>
                <div className='block-others-actus'>
                    <Link href='#'>
                        <p className='ml-3'>Le 07 mars 2024</p>
                        <h3 className='ml-3 mt-2'><strong>Titre de l'article</strong></h3>
                    </Link>
                </div>
                <div className='block-others-actus'>
                    <Link href='#'>
                        <p className='ml-3'>Le 07 mars 2024</p>
                        <h3 className='ml-3 mt-2'><strong>Titre de l'article</strong></h3>
                    </Link>
                </div>
                <div className='block-others-actus'>
                    <Link href='#'>
                        <p className='ml-3'>Le 07 mars 2024</p>
                        <h3 className='ml-3 mt-2'><strong>Titre de l'article</strong></h3>
                    </Link>
                </div>
                <div className='block-others-actus'>
                    <Link href='#'>
                        <p className='ml-3'>Le 07 mars 2024</p>
                        <h3 className='ml-3 mt-2'><strong>Titre de l'article</strong></h3>
                    </Link>
                </div>
              <ButtonGold
                href = '#'
                classNameButton = 'all-actus' 
                content = 'TOUTES LES ACTUS'
              />
              
            </div>
          </div>
        </div>
    </>
  )
}
