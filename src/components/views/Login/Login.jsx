import { useFormik } from "formik"
import React from "react"

export const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  }

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'El email es requerido.'
    }
    if (!values.password) {
      errors.password = 'La contraseña es requerida.'
    }

    return errors
  }

  const onSubmit = () => {
    localStorage.setItem('Logedd', 'yes')
  }

  const formik = useFormik({ initialValues, validate, onSubmit })

  const { handleChange, handleSubmit, errors, values } = formik

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}