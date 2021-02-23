import { BASE_URL } from "./constants";

export default async ({ username, password }) => {
  return (
    await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
  ).json();
};
