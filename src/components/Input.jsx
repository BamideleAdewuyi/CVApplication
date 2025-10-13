import { useState } from "react";

function Input({ label, type, className, name }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
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