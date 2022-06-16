import React, { Fragment } from 'react'
import { FaHeart} from 'react-icons/fa'


function Footer() {
  return (
      <Fragment>
          <div className='bg-red-900 py-8 px-6 text-center text-white text-3xl mt-10'>
              All Rights Reserved &copy;  <span className='font-bold'>Bakr Ali { <FaHeart className='text-green-700 inline'></FaHeart>}</span> 
          </div>
 
   </Fragment>
  )
}

export default Footer