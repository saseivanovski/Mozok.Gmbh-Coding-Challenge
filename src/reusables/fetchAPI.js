import axios from "axios";

export const fetchPosts = async (url, handleFetchData) => {
  try {
    const response = await axios.get(url);
    handleFetchData(response.data, "ok");
  } catch (err) {
    console.log(err);
    handleFetchData(err.message, "error");
  }
};
