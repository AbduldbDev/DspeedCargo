export const Services = () => {
    return (
        <>
            <section id="services" className="sectionpy-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center md:mb-16" data-aos="fade-up">
                        <h2 className="mb-3 text-3xl font-bold text-[#16341f] md:text-4xl">Our Services</h2>
                        <p className="mx-auto mb-4 max-w-2xl text-base text-gray-600 md:text-lg">
                            Comprehensive logistics solutions tailored to your needs
                        </p>
                        <div className="mx-auto h-1 w-16 bg-[#8a1c23] md:w-20"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                        <div
                            data-aos="fade-up"
                            className="card-hover rounded-lg bg-white p-5 shadow-sm transition-all duration-300 active:scale-[98%] md:rounded-xl md:p-6 md:hover:shadow-lg"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#16341f] p-3 text-white md:mb-5 md:h-16 md:w-16">
                                <i className="fas fa-home text-xl md:text-2xl"></i>
                            </div>
                            <h3 className="mb-3 text-center text-lg font-bold text-[#16341f] md:mb-4 md:text-xl">DOOR TO DOOR</h3>
                            <p className="text-center text-sm text-gray-600 md:text-base">
                                Convenient delivery straight to your doorstep across the Philippines.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="50"
                            className="card-hover rounded-lg bg-white p-5 shadow-sm transition-all duration-300 active:scale-[98%] md:rounded-xl md:p-6 md:hover:shadow-lg"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#8a1c23] p-3 text-white md:mb-5 md:h-16 md:w-16">
                                <i className="fas fa-box-open text-xl md:text-2xl"></i>
                            </div>
                            <h3 className="mb-3 text-center text-lg font-bold text-[#16341f] md:mb-4 md:text-xl">BALIKBAYAN BOX DELIVERY</h3>
                            <p className="text-center text-sm text-gray-600 md:text-base">
                                Specialized handling of balikbayan boxes with care and efficiency.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="card-hover rounded-lg bg-white p-5 shadow-sm transition-all duration-300 active:scale-[98%] md:rounded-xl md:p-6 md:hover:shadow-lg"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#16341f] p-3 text-white md:mb-5 md:h-16 md:w-16">
                                <i className="fas fa-truck text-xl md:text-2xl"></i>
                            </div>
                            <h3 className="mb-3 text-center text-lg font-bold text-[#16341f] md:mb-4 md:text-xl">TRUCKING</h3>
                            <p className="text-center text-sm text-gray-600 md:text-base">
                                Reliable trucking services for all your cargo transportation needs.
                            </p>
                        </div>

                        {/* Service Card 4 */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="card-hover rounded-lg bg-white p-5 shadow-sm transition-all duration-300 active:scale-[98%] md:rounded-xl md:p-6 md:hover:shadow-lg"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#8a1c23] p-3 text-white md:mb-5 md:h-16 md:w-16">
                                <i className="fas fa-map-marked-alt text-xl md:text-2xl"></i>
                            </div>
                            <h3 className="mb-3 text-center text-lg font-bold text-[#16341f] md:mb-4 md:text-xl">DOMESTIC DELIVERY</h3>
                            <p className="text-center text-sm text-gray-600 md:text-base">
                                Nationwide coverage with efficient domestic delivery solutions.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="card-hover rounded-lg bg-white p-5 shadow-sm transition-all duration-300 active:scale-[98%] md:rounded-xl md:p-6 md:hover:shadow-lg"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#16341f] p-3 text-white md:mb-5 md:h-16 md:w-16">
                                <i className="fas fa-boxes text-xl md:text-2xl"></i>
                            </div>
                            <h3 className="mb-3 text-center text-lg font-bold text-[#16341f] md:mb-4 md:text-xl">PER BOX DELIVERY</h3>
                            <p className="text-center text-sm text-gray-600 md:text-base">
                                Flexible options for individual box deliveries at competitive rates.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="250"
                            className="card-hover rounded-lg bg-white p-5 shadow-sm transition-all duration-300 active:scale-[98%] md:rounded-xl md:p-6 md:hover:shadow-lg"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#8a1c23] p-3 text-white md:mb-5 md:h-16 md:w-16">
                                <i className="fas fa-globe-asia text-xl md:text-2xl"></i>
                            </div>
                            <h3 className="mb-3 text-center text-lg font-bold text-[#16341f] md:mb-4 md:text-xl">ALL OVER THE PHILIPPINES</h3>
                            <p className="text-center text-sm text-gray-600 md:text-base">
                                Complete coverage across Luzon, Visayas, and Mindanao regions.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 block bg-white p-5 shadow-sm md:hidden" data-aos="fade-up">
                        <h3 className="mb-3 text-center text-lg font-bold text-[#16341f]">Need a specific service?</h3>
                        <p className="mb-4 text-center text-sm text-gray-600">Contact us for customized logistics solutions</p>
                        <div className="flex justify-center">
                            <a
                                href="#contact"
                                className="rounded-lg bg-[#8a1c23] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6e161c]"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services;
