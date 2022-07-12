import Proptypes from "prop-types";
import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const Grid = ({ category, handleEraseCategory }) => {
  const { gifData, isLoading } = useFetchGifs(category);
  return (
    <div>
      <h3>
        {category}
        <button
          className={"btn-borrar"}
          onClick={() => handleEraseCategory(category)}
        >
          Borrar
        </button>
      </h3>
      {/* <GifItem /> */}
      {isLoading && <h2>Cargando...</h2>}
      <ul className={"card-grid"}>
        {isLoading === false && gifData.length <= 0 ? (
          <p>
            <b>Lo sentimos! </b>No se encontraron imágenes 😢
          </p>
        ) : (
          gifData.map(img => <GifItem {...img} key={img.id} />)
        )}
      </ul>
    </div>
  );
};

Grid.propTypes = {
  category: Proptypes.string.isRequired,
};
