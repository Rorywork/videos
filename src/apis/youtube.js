import axios from "axios";

const KEY = "AIzaSyCvRyhxEQMyy87lFgqxn-TPgQSt6BBI854";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
