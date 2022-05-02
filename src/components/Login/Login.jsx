import React, { useState } from "react"

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    if (!email || !password) {
      alert('Debes completar los campos para iniciar sesión')
    } else {
      alert('Logueado')
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <div>
          <label>Email</label>
          <input type='email' name='email' value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div>
          <label>Contraseña</label>
          <input type='password' name='password' value={password} onChange={event => setPassword(event.target.value)} />
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}