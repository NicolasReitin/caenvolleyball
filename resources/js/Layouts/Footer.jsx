import LogoClub from '@/Components/LogoClub'
import Reseaux from '@/Components/Reseaux'
import React from 'react'

export default function Footer() {
  return (
    <>
        <div>
            {/*
                via https://www.shapedivider.app/
            */}
            <div class="custom-shape-divider-bottom-1709894291">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='footer flex justify-center gap-48'>
                <div className='mt-10'>
                    <LogoClub 
                        filePath = "/assets/images/cvb4.png"                
                    />
                </div>
                <div className='infos-pratiques'>
                    <h2>INFOS PRATIQUES</h2>
                    <p className='mt-4'>Caen Volley Ball</p>
                    <p>Centre Sportif La Haie Vigné, 135 Rue de Bayeux</p>
                    <p>14000 Caen</p>
                    <p className='mt-5'>Tel : <a href="tel:+33663434269">06.63.43.42.69</a></p>
                    <p className='mt-1'>Mail : <a href="mailto:caenvolleyball@gmail.com">caenvolleyball@gmail.com</a></p>
                </div>

                <div className='flex gap-4 mb-1 mt-20'>
                    <a target='_blank' rel="stylesheet" href="https://www.instagram.com/caenvolleyball/">
                        <img className='reseaux-sociaux' src="/assets/icones/instagram.png" alt="" />
                    </a>
                    <a target='_blank' rel="stylesheet" href="https://www.facebook.com/cvbofficiel/">
                        <img className='reseaux-sociaux' src="/assets/icones/facebook.png" alt="" />
                    </a>        
                </div>
            </div>
        </div>
    </>
  )
}
