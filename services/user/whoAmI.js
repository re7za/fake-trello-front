import request from "services/request";

export default async () => {
  const res = await request("/whoami");
  return res.json();
};
