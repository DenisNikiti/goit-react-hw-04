import axios from "axios";

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=LaHf_t9G2ig97YuuiU9R2Rapy1ziOTBDBM_1P2nVGSM&query=${query}&page=${page}`
  );
  return response.data.results;
};
