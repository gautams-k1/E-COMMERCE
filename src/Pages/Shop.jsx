import React from 'react'
import Hero from '../Componets/Hero/Hero'
import Popular from '../Componets/Populer/Populer';
import Offers from '../Componets/Offers/Offers';
import NewCollections from '../Componets/NewCollections/NewCollections';
import NewsLatter from '../Componets/NewsLatter/NewsLatter';

export default function Shop() {
  return (
    <div>
        <Hero></Hero>
        <Popular></Popular>
        <Offers></Offers>
        <NewCollections></NewCollections>
        <NewsLatter></NewsLatter>
    </div>
  )
}
