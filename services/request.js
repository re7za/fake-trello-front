import { BASE_URL } from "./constants";

const TOKEN_FLUSHER_STATUS_CODES = [401, 403];

function weakAuthToken() {
  return localStorage.getItem("token");
}

export default (url, options) => {
  const token = weakAuthToken();
  if (token) {
    options = options || {};
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  if (options && options.body) {
    options.headers = options.headers || {};
    options.headers["Content-Type"] = "application/json";
  }

  return fetch(BASE_URL + url, options).then(function (response) {
    if (TOKEN_FLUSHER_STATUS_CODES.includes(response.status)) {
      localStorage.removeItem("token");

      // Redirect user to login
    }
    return response;
  });
};
