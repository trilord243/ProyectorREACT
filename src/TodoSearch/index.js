import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSeachValue }) {
  const onsearchvalueChange = (event) => {
    console.log(event.target.value);
    setSeachValue(event.target.value);
  };

  return (
    <input
      className="Buscar"
      placeholder="Buscar la tarea"
      value={searchValue}
      onChange={onsearchvalueChange}
    />
  );
}
export { TodoSearch };
