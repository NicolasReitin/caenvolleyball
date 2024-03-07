import React from 'react'

export default function IntroBar() {
  return (
    <div className="introBar flex justify-between">
        <p className='text-white mt-2'><i>Vivre le plaisir et la performance</i></p>
        <div className='flex gap-4 mb-1 mt-1'>
            <a target='_blank' rel="stylesheet" href="https://www.instagram.com/caenvolleyball/">
                <img src="/assets/icones/instagram.png" alt="" />
            </a>
            <a target='_blank' rel="stylesheet" href="https://www.facebook.com/cvbofficiel/">
                <img src="/assets/icones/facebook.png" alt="" />
            </a>        
        </div>
    </div>
  )
}
