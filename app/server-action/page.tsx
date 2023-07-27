import { cookies } from 'next/headers'
// import { revalidatePath } from "next/cache";
import Form from "./_components"

export default async function Home() {
  const updateTitle = async (title: string) => {
    "use server";
    cookies().set('title', title)
    // revalidatePath('/');
  };

  const title = cookies().get('title')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Title: {title?.value || "no title set"}</h1>
      <Form updateTitle={updateTitle} /> 
    </main>
  )
}
