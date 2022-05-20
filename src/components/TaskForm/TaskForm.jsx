import "./TaskForm.styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const TaskForm = () => {
  const initialValues = {
    title: "",
    status: "",
    priority: "",
    description: "",
  }

  const required = "Este campo es requerido";

  const onSubmit = () => {
    alert("Formulario creado")
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "Ingrese un mínimo de 6 caracteres")
      .required(required),
    status: Yup.string().required(required),
    priority: Yup.string().required(required),
  })

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const { handleChange, handleSubmit, errors, touched, handleBlur } = formik

  return (
    <section className="task-form">
      <h2>Crear Tarea</h2>
      <p>Crea tus tareas</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Título"
              className={errors.title && touched.title ? "error" : ""}
            />
            {errors.title && touched.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>
          <div>
            <select
              name="status"
              className={errors.status && touched.status ? "error" : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Seleccionar un estado</option>
              <option value="new">nueva</option>
              <option value="inProgress">en proceso</option>
              <option value="finished">teminada</option>
            </select>
            {errors.status && touched.status && (
              <span className="error-message">{errors.status}</span>
            )}
          </div>
          <div>
            <select
              name="priority"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.priority && touched.priority ? "error" : ""}
            >
              <option value="">Seleccionar una prioridad</option>
              <option value="low">baja</option>
              <option value="medium">media</option>
              <option value="high">alta</option>
            </select>
            {errors.priority && touched.priority && (
              <span className="error-message">{errors.priority}</span>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Descripción"
          />
        </div>
        <div></div>
        <button type="submit">Crear</button>
      </form>
    </section>
  )
}