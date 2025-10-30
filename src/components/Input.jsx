import { useState } from "react";

function Input({ label, type, className, name, value, stateFunction, id }) {
  const [text, setText] = useState(value);

  function handleChange(e) {
    setText(e.target.value);
    if (stateFunction) {
      stateFunction(e.target.value, id, name);
    }
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        type={type}
        onChange={handleChange}
        className={className}
        name = {name}
        id = {name}
      />
    </label>
  );
}

export default Input;