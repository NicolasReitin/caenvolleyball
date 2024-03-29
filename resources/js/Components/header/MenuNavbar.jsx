import { Link } from '@inertiajs/react'
import React from 'react'

export default function MenuNavbar({ auth }) {
  // console.log(auth);
  return (
    <>
      <div>
        <ul className='MenuNavbar mt-8'>
          <li>
            <Link href={route('welcome')} className='itemMenu'>
              <span>Accueil</span>
            </Link>
          </li>
          <li>
            <Link href={route('actu.index')} className='itemMenu'>
                <span>Actualités</span>
            </Link>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <Link href="#" className='itemMenu'>
                  <span>Le club</span>
                </Link>
                <div >
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <li><Link href={route('projet')}>Le projet</Link></li>
                    <li><Link href={route('historique')}>Historique</Link></li>
                    <li><Link href={route('organigramme')}>Organigramme</Link></li>
                    <li><Link href={route('reglement')}>Règlement intérieur</Link></li>
                    <li><Link href={route('statuts')}>Les statuts de l'association</Link></li>
                    <li><Link href="#">Le Staff</Link></li>
                    <li><Link href={route('planning')}>Planning / entrainements</Link></li>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <Link href="#" className='itemMenu'>
                  <span>Équipes Séniors</span>
                </Link>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <li><Link href={route('equipe.index', 2)}>Nationale 3 Masculine</Link></li>
                    <li><Link href={route('equipe.index', 3)}>Prénationale Masculine</Link></li>
                    <li><Link href={route('equipe.index', 4)}>Régionale Masculine</Link></li>
                    <li><Link href={route('equipe.index', 8)}>Régionale Féminine</Link></li>
                    <li><Link href="#">Départementales Masculines</Link></li>
                    <li><Link href="#">Départementale Féminine</Link></li>
                    <li><Link href={route('equipe.index', 1)}>Ufolep</Link></li>
                    <li><Link href={route('equipe.index', 9)}>Volley assis</Link></li>
                    <li><Link href="#">Loisirs</Link></li>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <Link href="#" className='itemMenu'>
                  <span>Équipes Jeunes</span>
                </Link>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content w-44'>
                  <ul>
                    <li><Link href="#">M13 Masculins</Link></li>
                    <li><Link href="#">M15 Masculins</Link></li>
                    <li><Link href="#">M18 Féminines</Link></li>
                    <li><Link href="#">M18 Masculins</Link></li>
                    <li><Link href="#">M21 Masculins</Link></li>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <Link href="#" className='itemMenu'>
                  <span>Partenaires</span>
                </Link>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content w-48'>
                  <ul>
                    <li><Link href="#">Nos partenaires</Link></li>
                    <li><Link href="#">Devenir partenaire</Link></li>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <Link href="#" className='itemMenu'>
                  <span>Inscriptions</span>
                </Link>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" alt="" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <li><Link href={route('tarifs')}>Tarifs</Link></li>
                    <li><Link href="#">Modalités d'inscription</Link></li>
                    <li><Link href="#">Comment remplir sa Licence</Link></li>
                    <li><Link href="#">Documents</Link></li>
                  </ul>
                </div>
              </div>
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

                    