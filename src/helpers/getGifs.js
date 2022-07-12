export const getGifs = async (query, limit = 5) => {
  try {
    const apiUrl = "https://api.giphy.com/v1/gifs/search";
    const apiKey = "9sSP4ToZXyTmom79YlPVCtvwzQ6cbihs";
    const apiCall = await fetch(
      `${apiUrl}?api_key=${apiKey}&q=${query}&limit=${limit}`
    );
    const { data } = await apiCall.json();
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      image: img.images.original.url,
    }));

    return gifs;
  } catch (error) {
    console.error("Ha ocurrido un error con el fetch a la API!", error);
    return [];
  }
};
