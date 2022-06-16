import React, { Fragment, useEffect, useState } from 'react'
import '@splidejs/react-splide/css';
import Slider from './Slider';

function Popular() {

    useEffect(() => {
        getPopular();
    }, []);

    const [Popular, setPopular] = useState([]);
    const getPopular= async () => { 

        const check = localStorage.getItem('popular');
        if (check) {
            setPopular(JSON.parse(check));
        } else { 
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e15911edc56d4059a53286455a65e490&number=9`);
            const data = await api.json();
            localStorage.setItem('popular',JSON.stringify(data.recipes));
            setPopular(data.recipes);
           // console.log(data.recipes);
        }
       
        
    }
  return (
      <Fragment>
          <Slider Popular={Popular} title={'Popular Picks'} options={{perPage: 4,
              arrows: true,
              pagination: false,
              gap: '5rem',
              drag:'free'}} head_styled={'mt-7' }></Slider>
          
     </Fragment>
  )
}

export default Popular