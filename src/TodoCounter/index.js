import React from "react";

import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      HAZ COMPLETADO {completed} de {total} TAREAS
    </h2>
  );
}
export { TodoCounter };
