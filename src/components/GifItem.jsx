export const GifItem = ({ id, image, title }) => {
  return (
    <div className={"card"} key={id}>
      <img src={image} alt={title} />
      {title === " " || title === "" ? <p>Sin título</p> : <p>{title}</p>}
    </div>
  );
};
