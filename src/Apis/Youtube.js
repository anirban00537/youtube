import axios from "axios";
const KEY = "AIzaSyBntU8if2sNTPYaecmLXW2WchVQkzgcBo4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 30,
    key: `${KEY}`,
  },
});
