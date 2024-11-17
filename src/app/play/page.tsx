import { AppContainer } from "@/components"
import { AppContextProvider } from "@/context/appContext"

export const revalidate = 0

type PlayProps = { searchParams: { [key: string]: string | undefined } }

export default async function Play({
  searchParams
} : PlayProps) {
  const { category } = searchParams
  console.log("category", category)
  const response = await fetch(`http://localhost:3000/api/create?type=${category}`)
  const data: { hints: string[], name: string } = await response.json()
  return (
    <AppContextProvider>
      <AppContainer
        response={data}
      />
    </AppContextProvider>
  )
}