// import { toast } from "react-toastify";

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// const fetchInstance = async (url, options = {}) => {
//   const token = localStorage.getItem("KETO_ADMIN_TOKEN");

//   const headers = {
//     "Accept": "application/json",
//     "x-api-key": API_KEY,
//     "Accept-Language": "en",
//     "Content-Type": "application/json",
//     ...(token && { Authorization: `Bearer ${token}` }),
//     ...options.headers,
//   };

//   try {
//     const response = await fetch(`${BASE_URL}${url}`, {
//       ...options,
//       headers,
//     });

//     let result;
//     try {
//       result = await response.json();
//     } catch (jsonError) {
//       result = { message: "Invalid JSON response" };
//     }

//     if (!response.ok) {
//       if (result?.status_code === 401 || response.message === "Invalid token") {
//         toast.error("Invalid token");
//         localStorage.clear();
//         window.location.href = "/";
//       }
//       return Promise.reject(result);
//     }

//     return result;
//   } catch (error) {
//     toast.error("An error occurred while fetching data.");
//     return Promise.reject(error);
//   }
// };

// export const GET = (url, params = {}) => {
//   const queryString = params ? `?${new URLSearchParams(params).toString()}` : "";
//   return fetchInstance(`${url}${queryString}`, { method: "GET" });
// };

// export const DELETE = (url, params = {}, data = {}) => {
//   const queryString = params ? `?${new URLSearchParams(params).toString()}` : "";
//   return fetchInstance(`${url}${queryString}`, {
//     method: "DELETE",
//     body: JSON.stringify(data),
//   });
// };

// export const POST = (url, body, options = {}) => {
//   return fetchInstance(url, {
//     method: "POST",
//     body: JSON.stringify(body),
//     ...options,
//   });
// };

// export const PUT = (url, body, options = {}) => {
//   return fetchInstance(url, {
//     method: "PUT",
//     body: JSON.stringify(body),
//     ...options,
//   });
// };

// export const PATCH = (url, body, options = {}) => {
//   return fetchInstance(url, {
//     method: "PATCH",
//     body: JSON.stringify(body),
//     ...options,
//   });
// };

// export default fetchInstance;
