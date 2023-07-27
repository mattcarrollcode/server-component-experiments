'use client'

import { useRouter } from 'next/navigation'

export default function Refresh() {
    const router = useRouter()

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="button" onClick={() => {
                // router.push('/router-refresh')
                router.refresh()
            }
                }>
            Refresh
        </button>
    )
}