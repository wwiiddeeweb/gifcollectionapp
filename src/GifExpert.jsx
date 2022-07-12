import { React, useState } from "react";
import { AddCategory, Grid } from "./components";

const GifExpert = () => {
  const [categories, setCategories] = useState(["Ingmar Bergman"]);

  const handleAddCategory = newCat => {
    if (categories.includes(newCat)) return;
    return setCategories([...categories, newCat]);
  };

  const handleEraseCategory = category => {
    if (categories.includes(category)) {
      return setCategories(categories.filter(cat => cat !== category));
    }
    return;
  };

  return (
    <>
      <h1>Buscador y Coleccionador de GIFs</h1>
      <p>Busca una categoría y agrégala a la colección!</p>
      <AddCategory onNewCategory={handleAddCategory} />
      {categories.map(cat => (
        <Grid
          key={cat}
          category={cat}
          handleEraseCategory={handleEraseCategory}
        />
      ))}
    </>
  );
};

export default GifExpert;
