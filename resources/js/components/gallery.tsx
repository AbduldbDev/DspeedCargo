import { useState } from 'react';

type GalleryImage = { id: number; src: string; alt: string };

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    // Sample gallery data - replace with your actual images
    const galleryImages: GalleryImage[] = [
        { id: 1, src: '/Gallery/1.png', alt: 'Dspeed Cargo' },
        { id: 2, src: '/Gallery/2.png', alt: 'Dspeed Cargo' },
        { id: 3, src: '/Gallery/3.png', alt: 'Dspeed Cargo' },
        { id: 4, src: '/Gallery/4.png', alt: 'Dspeed Cargo' },
        { id: 5, src: '/Gallery/5.png', alt: 'Dspeed Cargo' },
        { id: 6, src: '/Gallery/6.png', alt: 'Dspeed Cargo' },
        { id: 7, src: '/Gallery/7.png', alt: 'Dspeed Cargo' },
        { id: 8, src: '/Gallery/8.png', alt: 'Dspeed Cargo' },
    ];

    const openModal = (image: GalleryImage) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <section id="gallery" className="textured-bg bg-white py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center md:mb-16" data-aos="fade-up">
                        <h2 className="mb-3 text-3xl font-bold text-[#16341f] md:text-4xl">Our Gallery</h2>
                        <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">Moments from our operations</p>
                        <div className="mx-auto mt-3 h-1 w-16 bg-[#8a1c23] md:w-20"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative transform overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl md:rounded-xl"
                                onClick={() => openModal(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110 md:h-70"
                                />

                                {/* Hover overlay for desktop - FIXED CLASS ORDER */}
                                <div className="bg-opacity-0 group-hover:bg-opacity-70 absolute inset-0 flex items-center justify-center transition-all duration-300 md:flex">
                                    <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex space-x-4">
                                            <button className="rounded-full bg-white p-2 text-[#16341f] transition-transform duration-200 hover:scale-110">
                                                <i className="fas fa-expand"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile touch indicator - PERFECT CIRCLE */}
                                <div className="bg-opacity-50 absolute right-2 bottom-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#16341f] text-white md:hidden">
                                    <i className="fas fa-search-plus text-xs"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black p-4" onClick={closeModal}>
                    <div className="relative max-h-full max-w-4xl">
                        <button
                            className="absolute -top-12 right-0 text-3xl text-white hover:text-[#8a1c23] md:top-0 md:-right-12"
                            onClick={closeModal}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[80vh] max-w-full rounded-lg object-contain" />
                        <div className="mt-2 text-center text-white">
                            <p className="text-lg font-medium">{selectedImage.alt}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
