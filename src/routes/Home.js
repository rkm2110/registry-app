import React from "react"
import {BrowserRouter, Link}  from "react-router-dom"

function Home(){
  return(
    <div>
      <h1> HOME </h1>
      <Link to="/registry">Click to go to registry</Link>
    </div>
  )
}

export default Home;