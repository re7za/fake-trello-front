import request from "services/request";

export default async (name, description, listId) => {
  return (
    await request("/task", {
      method: "POST",
      body: JSON.stringify({ name, description, listId }),
    })
  ).json();
};
