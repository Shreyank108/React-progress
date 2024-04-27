import React, { useState } from 'react'
import "../public/style.css" 

const App = () => {  

  const [position , setposition] =useState("0") 
  const [count , setcount] =useState(0) 
  const [count1 , setcount1] =useState(0) 

  const goup=()=>{ 
       setposition(position+10)
       setcount(count +1)
  }
  const godown=()=>{ 
       setposition(position-10)
       setcount1(count1 +1)
  }

  return (
    <div id="main">
      <div id="one">
        <h1>Welcome to flapy bird</h1>
        <div id="another">
          <p><b>up Count {count } </b></p>
          <p><b>Down Count {count1 }</b></p>
        </div>
      </div>
      <div id="two">
        <img style={{top: position +"px"}} src="https://imgs.search.brave.com/vNJK_c6ssIiz81ZHl8itaO4JZAD2E50EmjNQS9derMQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mYXN0/cG5nLmNvbS9pbWFn/ZXMvZmlsZS9mbGFw/cHktYmlyZC0wbDVx/YjcxcGU4a3Rmb2E5/LnBuZw" alt="" />
      </div>
      <div id="three">
        <button onClick={goup} >Go Down</button>
        <button onClick={godown}>Go Up</button>
      </div>
    </div>
  )
}

export default App
