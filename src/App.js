import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `Count (${count})`;
  }, [count]);

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase Count
        </button>
      </div>
    </div>
  );
}

export default App;
