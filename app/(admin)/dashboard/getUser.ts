import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? "";
};

export const getUser = async () => {
  try {
    const jwt = await getCookie("jwt");

    return jwtDecode(jwt) as {
      username: string;
      id: number;
    };
  } catch (e) {
    console.error(e);
  }
};
