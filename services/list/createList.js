import request from "services/request";

export default async (name) => {
  return (
    await request("/list", {
      method: "POST",
      body: JSON.stringify({ name }),
    })
  ).json();
};
