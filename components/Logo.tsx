import React from 'react';
import Image from 'next/image';
import Saverlylogo from '../Assets/Saverly-logo.png'

function logo() {
  return (
     <div> 
        <Image src={Saverlylogo} alt='SaverlyLogo'  className='w-[100px] h-auto'/>
     </div>
  )
}

export default logo;