import { cookies } from "next/headers";

export default async function checkAuth(host: string | null) {
  const response = await fetch(`http://localhost:4000/api/auth/check-auth`, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookies().toString(),
    },
  });

  return response.ok;
}
