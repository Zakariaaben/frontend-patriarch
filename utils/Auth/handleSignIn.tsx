import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleSignIn = async (
  event: React.FormEvent<HTMLFormElement>,
  formData: AdminFormType,
  setLoading: (loading: boolean) => void,
  setMessage: (message: string) => void,
  router: AppRouterInstance
) => {
  event.preventDefault();
  try {
    setLoading(true);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      formData,
      {
        withCredentials: true,
      }
    );

    setMessage(response.data.Message);

    router.push("/dashboard", { scroll: false });
  } catch (error: any) {
    console.log(error);

    setMessage("Invalid username or password. Please try again.");
  } finally {
    setLoading(false);
  }
};
