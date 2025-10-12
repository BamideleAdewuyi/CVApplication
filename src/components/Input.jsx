import { useState } from "react";

function Input({ label, type }) {
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
      />
    </label>
  );
}

export default Input;