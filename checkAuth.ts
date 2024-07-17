import { cookies } from "next/headers";

export default async function checkAuth() {
  const response = await fetch(`${process.env.API_URL}/auth/check-auth`, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookies().toString(),
    },
  });

  return response.ok;
}
