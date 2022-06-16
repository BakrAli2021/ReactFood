import React, { Fragment, useEffect, useState } from 'react'
import '@splidejs/react-splide/css';
import Slider from './Slider';
function Veggie() {

    useEffect(() => {
        getPopular();
    }, []);

    const [veggie, setveggie] = useState([]);
    const getPopular= async () => { 

        const check = localStorage.getItem('veggie');
        if (check) {
            setveggie(JSON.parse(check));
        } else { 
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e15911edc56d4059a53286455a65e490&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veggie',JSON.stringify(data.recipes));
            setveggie(data.recipes);
           // console.log(data.recipes);
        }
       
        
    }
  return (
    <Fragment>
          <Slider Popular={veggie} title={'Vegetables Picks'} options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              gap: '5rem',
              drag: 'free'
          }} ></Slider>
     </Fragment>
  )
}

export default Veggie