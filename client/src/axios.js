import axios from "axios";

// khởi tạo và cấu hình cho axios

const axioisClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// cấu hình cho respone khi được trả về cho client
axioisClient.interceptors.response.use((respsone) => {
  if (respsone && respsone.data) {
    return respsone.data;
  }
  return respsone;
});

export default axioisClient;
