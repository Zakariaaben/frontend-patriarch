import { cookies } from "next/headers";

export default async function checkAuth() {
  const response = await fetch(`https://api.patriarchplus.com/auth/check-auth`, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookies().toString(),
    },
  });

  return response.ok;
}
