import axios from "axios";
export const getNews = async () => {
  try {
    const response = await axios
      .get("http://hn.algolia.com/api/v1/search?query=&tags=story")
      .then((res) => res);
    return response;
  } catch (error) {
    return error;
  }
};
