import { Header } from "../../Header/Header";

import "./Tasks.styles.css";

import { limitString } from "../../../Helpers";
import { useResize } from "../../../Hooks/useResize";

export const Tasks = () => {

  const isPhone = useResize(900)

  return (
    <>
      <Header />
      <main id="tasks">
        <section className="list_container">
          <div className="list_header">
            <h2>Mis Tareas</h2>
          </div>
          {isPhone ?
            (<div className="list">
              <div className="card">
                <div className="close">x</div>
                <h3>Tarea 1</h3>
                <h6>18/05/2022 15:30 hs.</h6>
                <h5>Pablo Tachella</h5>
                <button type="button">Nueva</button>
                <button type="button">Alta</button>
                <p>Descripción fake</p>
              </div>
            </div>) :
            (<div className="list_wrapper">
              <div className="list">
                <h4>Nuevas</h4>
                <div className="card">
                  <div className="close">x</div>
                  <h3>Tarea 1</h3>
                  <h6>18/05/2022 15:30 hs.</h6>
                  <h5>Pablo Tachella</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>{
                  limitString(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic porro, odit sequi 
                  debitis inventore minima, ipsam explicabo ullam quaerat, deserunt quam ab. Dolor 
                  blanditiis eum molestiae magni, reprehenderit dolorem ex!`, 170).string
                  }</p>
                </div>
              </div>

              <div className="list">
                <h4>En proceso</h4>
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
                <h4>Finalizadas</h4>
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
            </div>)
          }
        </section>
      </main>
    </>
  )
}