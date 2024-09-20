import { SiPexels as PexelsIcon } from "react-icons/si";
import Link from "next/link";
import SearchBar from "@/components/layout/navbar/search";
import {Suspense} from "react";

export default function Navbar() {
    return(
        <div className="absolute bg-transparent z-10 top-0 right-0 w-full">
            <nav className="px-4 container mx-auto h-[80px] flex items-center justify-between">
                <div className="flex-1 flex items-center gap-5">
                    <Link href={"/"} className={"flex items-center gap-4 hover:opacity-70 transition-all"}>
                        <span className="bg-white rounded-md">
                            <PexelsIcon size={50} color={"rgb(7, 160, 129)"} />
                        </span>
                        <span className="text-2xl text-white font-medium">
                            Pexels
                        </span>
                    </Link>
                    <Suspense fallback={null}>
                        <SearchBar />
                    </Suspense>
                </div>
            </nav>
        </div>
    )
}