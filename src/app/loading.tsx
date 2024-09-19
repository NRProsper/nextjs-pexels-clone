export default function Loading() {
    return (
        <div className="container mx-auto p-4">
            <div className="columns-1 sm:columns-2 md:columns-3 gap-2">
                {Array.from({length: 16})
                    .map((_, index) => (
                    <div
                        key={index}
                        className="relative mb-4 bg-gray-200 rounded-md overflow-hidden break-inside-avoid"
                        style={{height: `${Math.random() * 600 + 300}px`}} // Random height for masonry effect
                    >
                        <div className="w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
