export const services = () => {
    return (
        <>
            <section id="services" className="section bg-gray-10 textured-bg overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center" data-aos="fade-up">
                        <h2 className="mb-4 text-4xl font-bold text-[#16341f]">Our Services</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">Comprehensive logistics solutions tailored to your needs</p>
                        <div className="mx-auto h-1 w-20 bg-[#8a1c23]"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="zoom-in" className="card-hover rounded-xl bg-white p-8 shadow-md transition duration-300 hover:shadow-xl">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#16341f] p-4 text-white">
                                <i className="fas fa-home text-2xl"></i>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold text-[#16341f]">DOOR TO DOOR</h3>
                            <p className="text-center text-gray-600">Convenient delivery straight to your doorstep across the Philippines.</p>
                        </div>

                        <div
                            className="card-hover rounded-xl bg-white p-8 shadow-md transition duration-300 hover:shadow-xl"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8a1c23] p-4 text-white">
                                <i className="fas fa-box-open text-2xl"></i>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold text-[#16341f]">BALIKBAYAN BOX DELIVERY</h3>
                            <p className="text-center text-gray-600">Specialized handling of balikbayan boxes with care and efficiency.</p>
                        </div>

                        <div
                            className="card-hover rounded-xl bg-white p-8 shadow-md transition duration-300 hover:shadow-xl"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#16341f] p-4 text-white">
                                <i className="fas fa-truck text-2xl"></i>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold text-[#16341f]">TRUCKING</h3>
                            <p className="text-center text-gray-600">Reliable trucking services for all your cargo transportation needs.</p>
                        </div>

                        <div data-aos="zoom-in" className="card-hover rounded-xl bg-white p-8 shadow-md transition duration-300 hover:shadow-xl">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8a1c23] p-4 text-white">
                                <i className="fas fa-map-marked-alt text-2xl"></i>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold text-[#16341f]">DOMESTIC DELIVERY</h3>
                            <p className="text-center text-gray-600">Nationwide coverage with efficient domestic delivery solutions.</p>
                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            className="card-hover rounded-xl bg-white p-8 shadow-md transition duration-300 hover:shadow-xl"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#16341f] p-4 text-white">
                                <i className="fas fa-boxes text-2xl"></i>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold text-[#16341f]">PER BOX DELIVERY</h3>
                            <p className="text-center text-gray-600">Flexible options for individual box deliveries at competitive rates.</p>
                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className="card-hover rounded-xl bg-white p-8 shadow-md transition duration-300 hover:shadow-xl"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8a1c23] p-4 text-white">
                                <i className="fas fa-globe-asia text-2xl"></i>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold text-[#16341f]">ALL OVER THE PHILIPPINES</h3>
                            <p className="text-center text-gray-600">Complete coverage across Luzon, Visayas, and Mindanao regions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default services;
