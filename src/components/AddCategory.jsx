import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      setInputValue("");
      return;
    } else {
      onNewCategory(inputValue.trim());
    }
    setInputValue("");
  };

  const changeHandler = ({ target }) => {
    return setInputValue(target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Ingresa búsqueda aquí..."
        value={inputValue}
        onChange={changeHandler}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
