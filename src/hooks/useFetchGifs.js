import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs.js";

export const useFetchGifs = category => {
  const [gifData, setGifData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    // console.log("is loading? : ", isLoading);
    const newImgs = await getGifs(category);
    setGifData(newImgs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifData,
    isLoading,
  };
};
