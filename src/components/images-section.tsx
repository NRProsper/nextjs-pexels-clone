"use client"

import {ImageType} from "@/types";
import {useCallback, useEffect, useRef, useState} from "react";
import ImageCard from "@/components/image-card";
import {fetchImages} from "@/api";

interface SectionProps  {
    initialImages: ImageType[]
}

const ImagesSection = ({initialImages}: SectionProps) => {

    const [images, setImages] = useState<ImageType[]>(initialImages);
    const [page, setPage] = useState<number>(2);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastImageRef = useRef<HTMLDivElement | null>(null);


    const loadMoreImages = useCallback(async () => {
        if(loading || !hasMore) return;
        setLoading(true);
        try{
            const newImages = await fetchImages(page);
            setImages(prevImages => [...prevImages, ...newImages]);
            setPage(prevPage => prevPage+1);
            if (newImages.length === 0) setHasMore(false);
        }catch (error) {
            console.error('Error loading more images:', error);
        } finally {
            setLoading(false);
        }
    }, [hasMore, loading, page])

    useEffect(() => {
        if(!lastImageRef.current) return;
        if(observer.current) observer.current?.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                loadMoreImages();
            }
        })

        if(lastImageRef.current) observer.current?.observe(lastImageRef.current as HTMLDivElement);

        return () => {
            if (observer.current) observer.current?.disconnect();
        };

    }, [loadMoreImages]);

    return (
        <div className="container mx-auto p-4">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
                {
                    images.map((image, idx) => (
                        <ImageCard
                            ref={idx === images.length - 1 ? lastImageRef : null}
                            key={idx}
                            image={image}
                        />
                    ))
                }
            </div>
            {loading && <p className="text-center mt-4">Loading...</p>}
        </div>
    )
}

export default ImagesSection;