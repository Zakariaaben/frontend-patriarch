import { cookies } from "next/headers";

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? "";
};

export default async function checkAuth() {
  const cookie = await getCookie("jwt");
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/auth/check-auth",
    {
      method: "post",
      credentials: "include",
      headers: {
        cookie: `jwt=${cookie}`,
      },
    }
  );

  return response.ok;
}
