import hyRequest from "@/service"
import { memo, useEffect, useState } from "react"

const Home = memo(() => {
  const [highScore, sethighScore] = useState([])

  useEffect(() => {
    hyRequest
      .get({
        url: "/home/highScore"
      })
      .then((res) => {
        sethighScore(res.list)
        // console.log(highScore)
      })
  })

  return (
    <div>
      {highScore.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  )
})

export default Home
