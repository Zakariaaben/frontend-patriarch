import { cookies } from "next/headers";

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? "";
};

export default async function checkAuth(host: string | null) {
  const cookie = await getCookie("jwt");

  const response = await fetch(`http://localhost:4000/api/auth/check-auth`, {
    method: "post",
    credentials: "include",
    headers: {
      cookie: `jwt=${cookie}`,
    },
  });

  return response.ok;
}
