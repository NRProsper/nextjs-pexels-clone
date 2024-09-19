import ImageCard from "@/components/image-card";

async function fetchImages() {

    const response = await fetch('https://api.pexels.com/v1/curated', {
        headers: {
            Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY as string,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }

    const data = await response.json();
    return data.photos;
}


export default async function Page() {
    const images = await fetchImages();
    console.log(images)

    return(
        <div className="container mx-auto p-4">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
                {
                    images.map((image, idx) => (
                        <ImageCard
                            key={idx}
                            image={image}
                        />
                    ))
                }
            </div>
        </div>
    )
}