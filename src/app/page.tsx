import {fetchImages} from "@/api";
import ImagesSection from "@/components/images-section";

// This is responsible for loading initial images and passing them down as props
export default async function Page() {
    const images = await fetchImages();

    return(
        <ImagesSection initialImages={images} />
    )
}