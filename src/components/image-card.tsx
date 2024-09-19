import Image from "next/image";
import { TbDownload as DownloadIcon } from "react-icons/tb";
import { RxAvatar as Avatar } from "react-icons/rx";
import {ImageType} from "@/types";
import React from "react";

interface ImageCardProps {
    image: ImageType
}

const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(({image}, ref) => {
    return (
        <div
            ref={ref}
            className="image-card cursor-pointer mb-2 break-inside-avoid relative group">
            <Image
                src={image.src.original}
                alt={image.alt}
                width={image.width} height={image.height}
            />

            <div
                className="absolute z-10 hidden group-hover:flex group-hover:visible flex-wrap gap-y-3 items-center justify-between bottom-3 left-3 right-3">
                <div className="flex items-center space-x-3">
                    <span className="w-10 h-10 rounded-full bg-[#07A081FF] flex items-center justify-center text-white">
                        <Avatar size={30}/>
                    </span>
                    <h3 className="text-white font-semibold text-lg">{image.photographer}</h3>
                </div>
                <button
                    className="flex items-center justify-center space-x-3 text-white bg-[#07A081FF] rounded-full px-6 py-3">
                    <DownloadIcon size={20}/>
                    <span>Download</span>
                </button>
            </div>
        </div>
    )
})

ImageCard.displayName = "ImageCard"

export default ImageCard;