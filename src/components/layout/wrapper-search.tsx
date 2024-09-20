"use client"

import Selector from "@/components/selector";
import {ImFilePicture as PictureIcon} from "react-icons/im";
import {RiVideoLine as VideoIcon} from "react-icons/ri";
import {useState} from "react";
import {IoSearchSharp as SearchIcon} from "react-icons/io5";

const options = [
    {
        title: "Photos",
        Icon: PictureIcon
    },
    {
        title: "Videos",
        Icon: VideoIcon
    }
]
const WrapperSearch = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
        <form action="/search" role="search" autoComplete="off"
              className="mt-8 z-[2] w-full max-w-[630px] bg-white rounded-md">
            <div className="h-12 w-full flex relative">
                <Selector selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder={`Search for free ${selectedOption.title.toLowerCase()}`}
                    className="w-full outline-none ps-2 placeholder:font-medium placeholder:text-lg"
                />
                <button
                    type="submit"
                    className="text-gray-500 py-[15px] px-4 h-full">
                    <SearchIcon size={24}/>
                </button>
            </div>
        </form>
    )
}


export default WrapperSearch;