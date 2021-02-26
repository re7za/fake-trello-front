import { BASE_URL } from "../constants";

export default async ({ username, password }) => {
  return (
    await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
  ).json();
};
