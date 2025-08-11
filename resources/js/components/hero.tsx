export const hero = () => {
    return (
        <>
            <section
                id="home"
                className="hero-section textured-bg relative flex items-center justify-center overflow-hidden pt-16 pb-12 sm:pt-50 md:pt-20"
            >
                <div className="absolute z-10 hidden md:block"></div>
                <div className="absolute inset-0 z-10 hidden md:block"></div>

                <div className="z-20 mx-auto mt-[30px] w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
                        <div className="space-y-6 text-center md:space-y-8 md:text-left" data-aos="fade-right">
                            <h1 className="text-primary text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                                Premium <span className="gradient-text">Logistics</span> Solutions
                            </h1>
                            <p className="mx-auto max-w-lg text-base text-gray-600 md:mx-0 md:text-lg">
                                Fast, reliable, and secure cargo delivery services across the Philippines. Your trusted partner for balikbayan box
                                deliveries.
                            </p>
                            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
                                <a
                                    href="#contact"
                                    className="transform rounded-full bg-[#16341f] px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#8a1c23] md:px-8 md:py-3"
                                >
                                    Get Started <i className="fas fa-rocket ml-2"></i>
                                </a>
                                <a
                                    href="#services"
                                    className="transform rounded-full border-2 border-[#16341f] px-6 py-3 font-medium text-[#16341f] transition duration-300 hover:scale-105 hover:bg-[#16341f] hover:text-white md:px-8 md:py-3"
                                >
                                    Learn More <i className="fas fa-book-open ml-2"></i>
                                </a>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 pt-2 md:justify-start md:gap-6 md:pt-4">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle mr-2 text-xl text-[#8a1c23] md:text-2xl"></i>
                                    <span className="text-sm font-medium">Fast Delivery</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-shield-alt mr-2 text-xl text-[#8a1c23] md:text-2xl"></i>
                                    <span className="text-sm font-medium">Secure Handling</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-peso-sign mr-2 text-xl text-[#8a1c23] md:text-2xl"></i>
                                    <span className="text-sm font-medium">Affordable Rates</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-8 md:mt-0">
                            <div className="mx-auto max-w-md rotate-1 transform rounded-2xl bg-[#16341f] p-1 shadow-2xl" data-aos="fade-left">
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/DSpeedCargo/videos/1711796649471007/&autoplay=1&mute=1"
                                    className="h-auto w-full -rotate-1 transform rounded-2xl shadow-lg"
                                    style={{
                                        border: 'none',
                                        overflow: 'hidden',
                                        aspectRatio: '3 / 4',
                                    }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div
                                className="absolute -bottom-6 -left-4 z-30 rounded-xl bg-white p-3 shadow-lg md:-bottom-8 md:-left-8 md:p-4"
                                data-aos="fade-up"
                            >
                                <div className="flex items-center">
                                    <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#8a1c23] text-white md:mr-3 md:h-12 md:w-12">
                                        <i className="fas fa-truck text-lg md:text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Active Deliveries</p>
                                        <p className="text-sm font-bold text-[#16341f] md:text-base">250+</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute -top-6 -right-4 z-30 rounded-xl bg-white p-3 shadow-lg md:-top-8 md:-right-8 md:p-4"
                                data-aos="fade-left"
                            >
                                <div className="flex items-center">
                                    <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#16341f] text-white md:mr-3 md:h-12 md:w-12">
                                        <i className="fas fa-map-marker-alt text-lg md:text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Coverage</p>
                                        <p className="text-sm font-bold text-[#16341f] md:text-base">Nationwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default hero;
