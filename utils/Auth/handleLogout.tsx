import axios from "axios";

export const handleLogout = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  try {
    await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,

      {
        withCredentials: true,
      }
    );
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
