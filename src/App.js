import React from "react"
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
            <div>
              JavaScript - язык программирования
            </div>
        </div>
        <div className="post__btns">
          <button>удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App
