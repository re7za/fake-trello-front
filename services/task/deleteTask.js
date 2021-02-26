import request from "services/request";

export default async (tId) => {
  return (
    await request("/task", {
      method: "DELETE",
      body: JSON.stringify({ tId }),
    })
  ).json();
};
