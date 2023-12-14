import { useState } from 'react'
import './App.css'

function App() {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  const [form, setForm] = useState(initialForm)

  const handle = (e) => {
    e.preventDefault()
    const newForm = { ...form }

    for (let i = 0; i < e.target.length; i++) {
      const input = e.target[i]
      if (input.id) {
        newForm[input.id] = input.value
      }
    }

    setForm(newForm)
  }

  return (
    <>
      <div>
        <form onSubmit={(e) => handle(e)}>
          <label>First Name</label><br />
          <input type="text" id="firstName" /><br />

          <label>Last Name</label><br />
          <input type="text" id="lastName" /><br />

          <label>Email</label><br />
          <input type="email" id="email" /><br />

          <label>Password</label><br />
          <input type="password" id="password" /><br />

          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default App
