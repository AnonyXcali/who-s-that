import { AppContainer } from "@/components";
import { AppContextProvider } from "@/context/appContext";

export const revalidate = 0;

type PlayProps = {
  searchParams: Promise<Record<string, string | undefined>>; // Assume searchParams is a Promise
};

export default async function Play({
  searchParams,
}: PlayProps) {
  const { category } = await searchParams || "default"; // Provide a fallback for `category`
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/create?type=${category}`
  );
  const data: { hints: string[]; name: string } = await response.json();

  return (
    <AppContextProvider>
      <AppContainer response={data} />
    </AppContextProvider>
  );
}