import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const getCookie = (name: string) => {
  return cookies().get(name)?.value ?? "";
};

export const getUser = async () => {
  const jwt = getCookie("jwt");
  try {
    return jwtDecode(jwt) as {
      username: string;
      id: number;
    };
  } catch (e) {
    console.error(e);
  }
};
