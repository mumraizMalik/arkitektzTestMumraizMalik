import axios from 'axios';

const getGifData = (offset: number) =>
  axios.get(
    `https://api.giphy.com/v1/gifs/trending?api_key=hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk&limit=15&offset=${offset}`,
  );
const searchGifData = (keyWord: string, offset: number) =>
  axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk&limit=15&offset=${offset}&q=${keyWord}`,
  );

export {getGifData, searchGifData};
