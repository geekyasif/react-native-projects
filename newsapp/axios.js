import axios from "axios";

const instance = axios.create({
    base_url : "https://newsapi.org/v2"
    // base_url : "https://api.pexels.com/v1/"
})

export default instance

