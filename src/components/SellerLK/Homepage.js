import React from 'react'
import StatusText from './StatusText'
import ActivityText from './ActivityText'
import LastAdded from './LastAdded'
import News from './News'
import Banner from './Banner'

const Homepage = () => {
  return (
    <>
    <Banner />
    <StatusText />
    <ActivityText />
    <LastAdded />
    <News />
    </>
  )
}

export default Homepage