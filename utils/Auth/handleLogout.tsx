import { client } from "../api/client";

export const handleLogout = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  try {
    await client.get("/api/auth/logout");
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
