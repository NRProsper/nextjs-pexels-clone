"use client"

import { IoSearchSharp as SearchIcon } from "react-icons/io5";
import {useSearchParams} from "next/navigation";

export default function SearchBar() {
    const searchParams = useSearchParams();

    return(
        <form action="/search" autoComplete="off" className="bg-[#f7f7f7] relative h-full w-full  rounded-md">
            <div
                className="group h-full flex items-center rounded-md  focus-within:border focus-within:border-gray-400"
            >
                <input
                    type="text"
                    name="q"
                    id="query"
                    placeholder="Search for free photoes..."
                    defaultValue={searchParams?.get('q') || ''}
                    className="bg-transparent w-full py-[15px] ps-4 pe-2 outline-none placeholder:font-medium placeholder:text-lg"
                />
                <button
                    type="submit"
                    className="text-gray-500 py-[15px] px-4 h-full group-focus-within:border-s group-focus-within:border-gray-400">
                    <SearchIcon size={24}/>
                </button>
                <div
                    className="hidden absolute top-full w-full left-0 right-0 bg-white rounded-t-none rounded-md p-2 group-focus-within:border group-focus-within:border-gray-400">
                    <h3 className="text-gray-700 font-semibold text-lg">Search recent...</h3>
                </div>
            </div>
        </form>
    )
}