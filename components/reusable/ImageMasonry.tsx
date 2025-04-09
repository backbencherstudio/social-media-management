interface ImageMasonryProps {
    images: string[];
}

const ImageCard: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-cover rounded-lg transition-transform transform hover:scale-105"
        loading="lazy"
    />
);

const ImageMasonry: React.FC<ImageMasonryProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-start">
            {/* Left Column */}
            <div className="md:col-span-1 grid grid-cols-1 gap-4">
                <ImageCard src={images[0]} alt="image-0" />
                <ImageCard src={images[4]} alt="image-4" />
            </div>

            {/* Center Column */}
            <div className="md:col-span-2 md:mt-[50px] lg:mt-[95px] sm:grid flex flex-col grid-cols-1 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ImageCard src={images[1]} alt="image-1" />
                    <ImageCard src={images[2]} alt="image-2" />
                </div>
                    <ImageCard src={images[5]} alt="image-5" />
            </div>

            {/* Right Column */}
            <div className="md:col-span-1 flex sm:grid grid-cols-1 gap-4">
                <ImageCard src={images[3]} alt="image-3" />
                <ImageCard src={images[6]} alt="image-6" />
            </div>
        </div>
    );
};

export default ImageMasonry;
