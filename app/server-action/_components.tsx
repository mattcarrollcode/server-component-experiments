"use client"

import { useState } from 'react'

export default function Form({updateTitle}: {updateTitle: (title: string) => void})  {
    const [title, setTitle] = useState("");

    return <>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 block w-full leading-5 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
                setTitle("")
                updateTitle(title);
            }}
        >
            Update title
        </button></>
}