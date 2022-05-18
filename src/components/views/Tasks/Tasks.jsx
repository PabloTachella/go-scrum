import { Header } from "../../Header/Header";

import "./Tasks.styles.css";

export const Tasks = () => {
  return (
    <>
      <Header />
      <main id="tasks">
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis Tareas</h2>
          </div>
          <div className="list">
            <div className="card">
              <div className="close">x</div>
              <h3>Tarea 1</h3>
              <h6>18/05/2022 15:30 hs.</h6>
              <h5>Pablo Tachella</h5>
              <button type="button">Nueva</button>
              <button type="button">Alta</button>
              <p>Descripción fake</p>
            </div>
          </div>

          <div className="list">
            <div className="card">
              <div className="close">x</div>
              <h3>Tarea 1</h3>
              <h6>18/05/2022 15:30 hs.</h6>
              <h5>Pablo Tachella</h5>
              <button type="button">Nueva</button>
              <button type="button">Alta</button>
              <p>Descripción fake</p>
            </div>
          </div>

          <div className="list">
            <div className="card">
              <div className="close">x</div>
              <h3>Tarea 1</h3>
              <h6>18/05/2022 15:30 hs.</h6>
              <h5>Pablo Tachella</h5>
              <button type="button">Nueva</button>
              <button type="button">Alta</button>
              <p>Descripción fake</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}