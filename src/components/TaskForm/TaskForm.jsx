import "./TaskForm.styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env

export const TaskForm = () => {
  const initialValues = {
    title: "",
    status: "",
    importance: "",
    description: "",
  }

  const required = "*Campo obligatorio";

  const onSubmit = () => {
    fetch(`${API_ENDPOINT}task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ task: values }),
    })
      .then((response) => response.json())
      .then((data) => {
        resetForm()
        toast("Tu tarea fue creada")
      })
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "Ingrese un mínimo de 6 caracteres")
      .required(required),
    status: Yup.string().required(required),
    importance: Yup.string().required(required),
    description: Yup.string().required(required),
  })

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const { handleChange, handleSubmit, errors, touched, handleBlur, values, resetForm } = formik

  return (
    <section className="task-form">
      <h2>Crear Tarea</h2>
      <p>Crea tus tareas</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              name="title"
              value={values.title}
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
              value={values.status}
              className={errors.status && touched.status ? "error" : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Seleccionar un estado</option>
              <option value="NEW">Nueva</option>
              <option value="IN PROGRESS">En proceso</option>
              <option value="FINISHED">Teminada</option>
            </select>
            {errors.status && touched.status && (
              <span className="error-message">{errors.status}</span>
            )}
          </div>
          <div>
            <select
              name="importance"
              value={values.importance}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.importance && touched.importance ? "error" : ""}
            >
              <option value="">Seleccionar una prioridad</option>
              <option value="LOW">Baja</option>
              <option value="MEDIUM">Media</option>
              <option value="HIGH">Alta</option>
            </select>
            {errors.importance && touched.importance && (
              <span className="error-message">{errors.importance}</span>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Descripción"
            className={errors.description && touched.description ? "error" : ""}
          />
          {errors.description && touched.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>
        <div></div>
        <button type="submit">Crear</button>
      </form>
      <ToastContainer />
    </section>
  )
}