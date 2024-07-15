import Navbar from "@/components/navbar";

export default async function Home() {
  const response = await fetch(`${process.env.API_URL}/projects`, {
    method: "GET",
  });
  const projects: Project[] = await response.json();
  return (
    <>
      <Navbar />
      <div>HomePage</div>
    </>
  );
}
