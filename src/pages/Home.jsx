import React, { Fragment } from 'react'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import {motion} from 'framer-motion'

function Home() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{duration:.5}}
    >
      
       <Veggie></Veggie>
      <Popular></Popular>
      
     </motion.div>
  )
}

export default Home