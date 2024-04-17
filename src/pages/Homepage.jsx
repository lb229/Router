import React from 'react'
import { Hero } from '../components/Hero'
import { Welcome } from "../components/Welcome";


export const Homepage = () => {
  return (
    <div>
  <Hero
  title="Github Search for Username "
  subtitle={<Welcome />}
/>

    </div>
  )
}