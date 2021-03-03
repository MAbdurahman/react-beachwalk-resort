import React from 'react';
import Hero from '../../../global/Hero';
import homeImage from '../../../../img/homeBcg.jpeg';

export default function Header() {
   return (
      <Hero img={homeImage} >
         <h1>Beachwalk Resort</h1>
      </Hero>
   );
};
