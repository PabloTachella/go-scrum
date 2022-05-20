import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "../Auth.styles.css";

export const Register = () => {

  const [data, setData] = useState()

  useEffect(() => {
    fetch("https://goscrum-api.alkemy.org/auth/data")
      .then((response) => response.json())
      .then((data) => setData(data.result))
  }, [])

  console.log({ data })

  const initialValues = {
    userName: "",
    password: "",
    email: "",
    teamID: "",
    role: "",
    continent: "",
    region: "",
  }

  const required = "*Campo obligatorio";

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string()
        .min(4, "Ingrese un mínimo de 4 caracteres")
        .required(required),
      password: Yup.string().required(required),
      email: Yup.string().email("Debe ser un email válido").required(required),
      role: Yup.string().required(required),
      continent: Yup.string().required(required),
      region: Yup.string().required(required),
    })

  const onSubmit = () => {
    alert('Registrado')
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const { handleSubmit, handleChange, touched, handleBlur, values, errors } = formik

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div>
          <label>Nombre de usuario</label>
          <input
            name="userName"
            type="text"
            value={values.userName}
            onChange={handleChange}
            className={errors.userName && touched.userName ? "error" : ""}
            onBlur={handleBlur}
          />
          {errors.userName && touched.userName && (
            <span className="error-message">{errors.userName}</span>
          )}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            className={errors.password && touched.password ? "error" : ""}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={errors.email && touched.email ? "error" : ""}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <input
          type="hidden"
          names="teamID"
          value={"9cdbd108-f924-4383-947d-8f0c651d0dad"}
        />

        <div>
          <label>Rol</label>
          <select
            name="role"
            onChange={handleChange}
            value={values.role}
            className={errors.role && touched.role ? "error" : ""}
            onBlur={handleBlur}
          >
            <option value="">Seleccionar Rol...</option>
            {data?.Rol?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.role && touched.role && (
            <span className="error-message">{errors.role}</span>
          )}
        </div>

        <div>
          <label>Continente</label>
          <select
            name="continent"
            onChange={handleChange}
            value={values.continent}
            className={errors.continent && touched.continent ? "error" : ""}
            onBlur={handleBlur}
          >
            <option value="">Seleccionar Continente...</option>
            {data?.continente?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.continent && touched.continent && (
            <span className="error-message">{errors.continent}</span>
          )}
        </div>
        {values.continent === "America" && (
          <div>
            <label>Región</label>
            <select
              name="region"
              onChange={handleChange}
              value={values.region}
              className={errors.region && touched.region ? "error" : ""}
              onBlur={handleBlur}
            >
              <option value="">Seleccionar Región...</option>
              {data?.region?.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.region && touched.region && (
              <span className="error-message">{errors.region}</span>
            )}
          </div>
        )}

        <div>
          <button type="submit">Enviar</button>
        </div>
        <div>
          <Link to="/login">Ir a iniciar Sesión</Link>
        </div>
      </form>
    </div>
  )
}