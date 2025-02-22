import React from 'react'
import Home_section from '../components/Home_section'
import Latest from '../components/latest'
import BestSeller from '../components/BestSellers'
import OurPolicy from '../components/OurPolicy'
import NewletterBox from '../components/NewletterBox'
const homePage = () => {
  return (
    <div>
      <Home_section/>
      <Latest/>
      <BestSeller/>
      <OurPolicy/>
      <NewletterBox/>
    </div>
  )
}

export default homePage
