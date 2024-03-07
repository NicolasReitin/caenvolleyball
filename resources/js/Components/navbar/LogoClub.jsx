import { Link } from '@inertiajs/react'
import React from 'react'

export default function LogoClub() {
  return (
    <div>
      <Link href={route('welcome')}>
        <img className='logoClub' src="/assets/images/cvb4.png" alt="logo CVB" />
      </Link>
    </div>
  )
}
