import { memo, useEffect, useState } from "react"
import HomeBanner from "./homeCpns/homeBanner"
import { HomeWrapper } from "./style"

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="home-content">11</div>
    </HomeWrapper>
  )
})

export default Home
