import React, { Fragment } from 'react'
import Cuisine from './Cuisine'
import Home from './Home'
import Searched from './Searched'
import { Route, Routes, useLocation } from 'react-router-dom'
import Recipie from './Recipie'

import { AnimatePresence} from  'framer-motion'
 

function Pages() {
  const location = useLocation();
  return (
    <Fragment>
     <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={ <Home/>}/>
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searched/:search' element={<Searched />}/>
          <Route path='/recipie/:name' element={<Recipie/>}/>
        
          
        </Routes>
        </AnimatePresence>
    </Fragment>
  )
}

export default Pages