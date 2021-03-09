import request from "services/request";

export default async (tId, newVal) => {
  return (
    await request("/task/status", {
      method: "PUT",
      body: JSON.stringify({ tId, newVal }),
    })
  ).json();
};
