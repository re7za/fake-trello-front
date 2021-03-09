import request from "services/request";

export default async (tId) => {
  return (await request("/task?task_id=" + tId)).json();
};
