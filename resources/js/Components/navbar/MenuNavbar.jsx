import { Link } from '@inertiajs/react'
import React from 'react'

export default function MenuNavbar() {
  return (
    <>
      <div>
        <ul className='MenuNavbar mt-6'>
          <Link href="#" className='itemMenu'>
            <li>Accueil</li>
          </Link>
          <Link href="#" className='itemMenu'>
            <div className='flex'>
              <li>Le Club</li>
              <div>
                <img src="/assets/icones/arrow-down-yellow.png" alt="" />
              </div>
            </div>
          </Link>
          <Link href="#" className='itemMenu'>
            <div className='flex'>
              <li>Equipes</li>
              <div>
                <img src="/assets/icones/arrow-down-yellow.png" alt="" />
              </div>
            </div>
          </Link>
          <Link href="#" className='itemMenu'>
            <div className='flex'>
              <li>Equipes jeunes</li>
              <div>
                <img src="/assets/icones/arrow-down-yellow.png" alt="" />
              </div>
            </div>
          </Link>
          <Link href="#" className='itemMenu'>
              <li>Actualité</li>
          </Link>
          <Link href="#" className='itemMenu'>
            <div className='flex'>
              <li>Nos partenaires</li>
              <div>
                <img src="/assets/icones/arrow-down-yellow.png" alt="" />
              </div>
            </div>
          </Link>
          <Link href="#" className='itemMenu'>
          <div className='flex'>
            <li>Inscriptions</li>
            <div>
              <img src="/assets/icones/arrow-down-yellow.png" alt="" />
            </div>
          </div>
          </Link>
          <Link href="#" className='itemMenu'>
            <li>Boutique</li>
          </Link>
        </ul>
      </div>
    </>
  )
}


{/* <li>
        <a href="#" class="desktop-item">Dropdown Menu</a>
        <input type="checkbox" id="showDrop">
        <label for="showDrop" class="mobile-item">Dropdown Menu</label>
        <ul class="drop-menu">
          <li><a href="#">Drop menu 1</a></li>
          <li><a href="#">Drop menu 2</a></li>
          <li><a href="#">Drop menu 3</a></li>
          <li><a href="#">Drop menu 4</a></li>
        </ul>
      </li> */}