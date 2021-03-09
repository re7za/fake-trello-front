import request from "services/request";

export default async (task, listId) => {
  return (
    await request("/task", {
      method: "POST",
      body: JSON.stringify({ ...task, listId }),
    })
  ).json();
};
