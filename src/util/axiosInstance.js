import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "http://test-backend.itdelta.agency/api/",
});
