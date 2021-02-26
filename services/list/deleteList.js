import request from "services/request";

export default async (lId) => {
  return (
    await request("/list", {
      method: "DELETE",
      body: JSON.stringify({ lId }),
    })
  ).json();
};
