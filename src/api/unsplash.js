import axios from "axios";

   export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID AqmxwoyIHIuztZ7fmdmJc0-n6jkvgyl_4VihGcLmggo",
      },  
})