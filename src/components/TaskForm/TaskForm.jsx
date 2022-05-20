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

  const { handleChange, handleSubmit, errors } = formik

  return (
    <section className="task-form">
      <h2>Crear Tarea</h2>
      <p>Crea tus tareas</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input name="title" onChange={handleChange} placeholder="Título" />
            {errors.title && <div>{errors.title}</div>}
          </div>
          <div>
            <select name="status" onChange={handleChange}>
              <option value="">Seleccionar un estado</option>
              <option value="new">nueva</option>
              <option value="inProgress">en proceso</option>
              <option value="finished">teminada</option>
            </select>
            {errors.status && <div>{errors.status}</div>}
          </div>
          <div>
            <select name="priority" onChange={handleChange}>
              <option value="">Seleccionar una prioridad</option>
              <option value="low">baja</option>
              <option value="medium">media</option>
              <option value="high">alta</option>
            </select>
            {errors.priority && <div>{errors.priority}</div>}
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