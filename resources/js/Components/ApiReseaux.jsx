import React from 'react'

export default function ApiReseaux() {
  return (
    <>
        <div className="reseaux">
            <h2 className=''>SUIVEZ-NOUS SUR LES RESEAUX SOCIAUX</h2>
            <div className='flex justify-center flex-wrap'>
                <div className='w-[350px] bloc-facebook'>
                    <div>
                        <a target='_blank' rel="stylesheet" href="https://www.facebook.com/cvbofficiel/">
                            <img className='h-16' src="/assets/images/logo-facebook.png" alt="logo facebook" />
                        </a>
                    </div>
                    <div class="fb-page" data-href="https://www.facebook.com/cvbofficiel" data-tabs="timeline" data-width="350" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/cvbofficiel" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/cvbofficiel">Caen Volley Ball</a></blockquote></div>
                </div>
                <div className='w-[350px] bloc-instagram'>
                    <div>
                        <a target='_blank' rel="stylesheet" href="https://www.instagram.com/caenvolleyball/">
                            <img className='h-16 w-[55%]' src="/assets/images/logo-instagram.png" alt="logo instagram" />
                        </a>
                    </div>
                    <div class="elfsight-app-0ee2e7e5-23f2-4149-bb33-5b55f249b820" data-elfsight-app-lazy></div>
                </div>
            </div>
        </div>  
    </>
  )
}
