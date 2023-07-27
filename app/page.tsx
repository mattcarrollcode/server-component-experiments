import Link from "next/link";


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Demos</h1>
      <ul>
        <li><Link href="/server-action">Server Action</Link></li>
        <li><Link href="/router-refresh">Router Refresh</Link></li>
    </ul>
    </main>
  )
}
