import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 const [names, setName] = useState([])

 useEffect(() => {
  axios.get("/api/name")
  .then((response) => {
    setName(response.data);
  })
  .catch((error) => {
    console.log("Error", error)
  })
 })

  return (
    <>
      <h1>Akash</h1>
      <p>Names: {names.length} </p>
      {names.map((name, index) => (
        <div key={name.id}>
          <h3>{name.name}</h3>
          <h3>{name.surname}</h3>
        </div>
      ))}
    </>
  )
}

export default App
