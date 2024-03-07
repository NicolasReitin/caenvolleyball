import { Link } from '@inertiajs/react'
import React from 'react'

export default function MenuNavbar({ auth }) {
  // console.log(auth);
  return (
    <>
      <div>
        <ul className='MenuNavbar mt-6'>
          <li>
            <Link href="#" className='itemMenu'>
              <span>Accueil</span>
            </Link>
          </li>
          <li className='dropdown-item'>
            <Link href="#" className='itemMenu'>
              <div className='flex'>
                <span>Le Club</span>
                <div >
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content'>
                  <ul>
                    <li><Link href="#">Historique</Link></li>
                    <li><Link href="#">Organigramme</Link></li>
                    <li><Link href="#">Règlement intérieur</Link></li>
                    <li><Link href="#">Le Staff</Link></li>
                    <li><Link href="#">Planning / entrainements</Link></li>
                    <li><Link href="#">Évènements</Link></li>
                  </ul>
                </div>
              </div>
            </Link>
          </li>
          <li className='dropdown-item'>
            <Link href="#" className='itemMenu'>
              <div className='flex'>
                <span>Les équipes Séniors</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content'>
                  <ul>
                    {/* <h3>Seniors</h3> */}
                    <li><Link href="#">La Nationale 3 Masculine</Link></li>
                    <li><Link href="#">la Prénationale Masculine</Link></li>
                    <li><Link href="#">La Régionale Masculine</Link></li>
                    <li><Link href="#">La Régionale Féminine</Link></li>
                    <li><Link href="#">Les Départementales Masculines</Link></li>
                    <li><Link href="#">La Départementale Féminine</Link></li>
                    <li><Link href="#">L'Ufolep</Link></li>
                    <li><Link href="#">Le Volley assis</Link></li>
                    <li><Link href="#">Les Loisirs</Link></li>
                    {/* <hr />
                    <h3>Jeunes</h3>
                    <li><Link href="#">M13</Link></li>
                    <li><Link href="#">M15</Link></li>
                    <li><Link href="#">M18</Link></li>
                    <li><Link href="#">M21</Link></li> */}
                  </ul>
                </div>
              </div>
            </Link>
          </li>
          <li className='dropdown-item'>
            <Link href="#" className='itemMenu'>
              <div className='flex'>
                <span>Les équipes Jeunes</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content'>
                  <ul>
                    <li><Link href="#">Les M13 Masculins</Link></li>
                    <li><Link href="#">Les M15 Masculins</Link></li>
                    <li><Link href="#">Les M18 Féminines</Link></li>
                    <li><Link href="#">Les M18 Masculins</Link></li>
                    <li><Link href="#">Les M21 Masculins</Link></li>
                  </ul>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#" className='itemMenu'>
                <span>Actualités</span>
            </Link>
          </li>
          <li className='dropdown-item'>
            <Link href="#" className='itemMenu'>
              <div className='flex'>
                <span>Partenaires</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content'>
                  <ul>
                    <li><Link href="#">Nos partenaires</Link></li>
                    <li><Link href="#">Devenir partenaire</Link></li>
                  </ul>
                </div>
              </div>
            </Link>
          </li>
          <li className='dropdown-item'>
            <Link href="#" className='itemMenu'>
              <div className='flex'>
                <span>Inscriptions</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content'>
                  <ul>
                    <li><Link href="#">Tarifs</Link></li>
                    <li><Link href="#">Modalités d'inscription</Link></li>
                    <li><Link href="#">Comment remplir sa Licence</Link></li>
                    <li><Link href="#">Documents</Link></li>
                  </ul>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#" className='itemMenu'>
              <span>Boutique</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

                    