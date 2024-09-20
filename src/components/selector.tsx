"use client"

import {useState} from "react";
import {ImFilePicture as PictureIcon} from "react-icons/im";
import {RiVideoLine as VideoIcon} from "react-icons/ri";
import {IoChevronDown as ChevronDown} from "react-icons/io5";
import {IconType} from "react-icons";

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

const Selector = (
    {selectedOption, setSelectedOption}:{
        selectedOption: {title: string, Icon: IconType},
        setSelectedOption: (option :{title:string, Icon: IconType}) => void
    }
) => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false)
    };

    return(
        <div
            className="relative bg-[#f7f7f7] rounded-tl rounded-bl flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="flex bg-gray-300 border border-gray-600 relative m-2 group items-center justify-center rounded-md px-4 space-x-3 font-semibold h-[calc(100%-10px)]"
                type={"button"}
            >
                <span>
                    <selectedOption.Icon/>
                </span>
                <span>{selectedOption.title}</span>
                <span
                    className={`transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    <ChevronDown/>
                </span>
            </button>
            <div
                className={`absolute top-full translate-y-2 rounded w-full bg-white flex items-center justify-center flex-col gap-2 transition-opacity duration-300 ${
                    isDropdownOpen ? "opacity-100 block" : "opacity-0 hidden"
                }`}
            >
                {
                    options.map((option, idx) => {
                        return(
                            <div
                                key={idx} className="flex items-center space-x-3 cursor-pointer hover:bg-[#f7f7f7] w-full px-4 py-2 rounded"
                                onClick={() => setSelectedOption(option)}
                            >
                                <span>
                                    <option.Icon/>
                                </span>
                                <span>{option.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Selector;