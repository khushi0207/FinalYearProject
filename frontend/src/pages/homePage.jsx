import React from 'react'
import Home_section from '../components/Home_section'
import Latest from '../components/latest'
import BestSeller from '../components/BestSellers'
const homePage = () => {
  return (
    <div>
      <Home_section/>
      <Latest/>
      <BestSeller/>

    </div>
  )
}

export default homePage
