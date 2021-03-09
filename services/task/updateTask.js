import request from "services/request";

export default async (tId, task) => {
  return (
    await request("/task", {
      method: "PUT",
      body: JSON.stringify({
        tId,
        ...task,
      }),
    })
  ).json();
};
