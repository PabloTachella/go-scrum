import "./TaskForm.styles.css";
import { useFormik } from "formik";

export const TaskForm = () => {
  const initialValues = {
    title: "",
    status: "",
    importance: "",
    description: "",
  }

  const onSubmit = () => {
    alert("Formulario creado")
  }

  const formik = useFormik({ initialValues, onSubmit })

  const { handleSubmit, handleChange } = formik

  return (
    <section className="task-form">
      <h2>Crear Tarea</h2>
      <p>Crea tus tareas</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input name="title" onChange={handleChange} placeholder="Título" />
          </div>
          <div>
            <select name="status" onChange={handleChange}>
              <option value="">Seleccionar un estado</option>
              <option value="new">nueva</option>
              <option value="inProgress">en proceso</option>
              <option value="finished">teminada</option>
            </select>
          </div>
          <div>
            <select name="importance" onChange={handleChange}>
              <option value="">Seleccionar una prioridad</option>
              <option value="low">baja</option>
              <option value="medium">media</option>
              <option value="high">alta</option>
            </select>
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