import request from "./request";

export default async ({ username, password }) => {
  let res = await request("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  res = await res.json();
  localStorage.setItem("token", res.token);

  return res;
};
