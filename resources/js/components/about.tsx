export const About = () => {
    return (
        <>
            <section id="about" className="section textured-bg overflow-hidden py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center md:mb-16" data-aos="fade-up">
                        <h2 className="mb-3 text-3xl font-bold text-[#16341f] md:text-4xl">About DSpeed Cargo</h2>
                        <div className="mx-auto h-1 w-16 bg-[#8a1c23] md:w-20"></div>
                    </div>

                    <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
                        <div className="w-full space-y-6 md:space-y-8">
                            <p className="text-base text-gray-600 md:text-lg" data-aos="fade-right">
                                DSpeed Cargo Delivery Service is one of the premier delivery services based in Tarlac with warehouses located in
                                Valenzuela City and Tarlac. We take great pride in working with our OFWs, often known as the "Modern Heroes."
                            </p>
                            <p className="text-base text-gray-600 md:text-lg" data-aos="fade-right">
                                Our objective is to satisfy customers with high-quality services at affordable prices, leveraging our expertise in
                                cargo handling to deliver balikbayan boxes straight to families undamaged and quickly.
                            </p>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                                <div
                                    className="rounded-lg border-l-4 border-[#8a1c23] bg-white p-4 shadow-sm transition duration-300 md:rounded-xl md:p-6 md:hover:shadow-lg"
                                    data-aos="fade-up-right"
                                >
                                    <div className="flex items-start">
                                        <div className="mr-3 rounded-full bg-[#16341f] p-2 text-white md:mr-4 md:p-3">
                                            <i className="fas fa-bullseye text-lg md:text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-lg font-bold text-[#16341f] md:mb-2 md:text-xl">MISSION</h3>
                                            <p className="text-sm text-gray-600 md:text-base">
                                                Provide quality door-to-door deliveries with passion and dedication to assure efficient service that
                                                satisfies customers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg border-l-4 border-[#16341f] bg-white p-4 shadow-sm transition duration-300 md:rounded-xl md:p-6 md:hover:shadow-lg"
                                    data-aos="fade-up-right"
                                >
                                    <div className="flex items-start">
                                        <div className="mr-3 rounded-full bg-[#8a1c23] p-2 text-white md:mr-4 md:p-3">
                                            <i className="fas fa-eye text-lg md:text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-lg font-bold text-[#16341f] md:mb-2 md:text-xl">VISION</h3>
                                            <p className="text-sm text-gray-600 md:text-base">
                                                Become the best partner to our clients by delivering packages quickly, efficiently, and safely to
                                                their homes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full">
                            <div
                                data-aos="fade-left"
                                className="transform rounded-xl bg-[#8a1c23] p-1 shadow-lg md:-rotate-1 md:rounded-2xl md:shadow-2xl"
                            >
                                <img
                                    src="/Images/logo.png"
                                    alt="DSpeed Cargo Warehouse"
                                    className="h-auto w-full transform rounded-xl shadow-md md:rotate-1 md:rounded-2xl"
                                    loading="lazy"
                                />
                            </div>
                            <div
                                className="absolute -right-4 -bottom-4 z-30 w-48 rounded-lg bg-white p-3 shadow-md md:-bottom-6 md:-left-6 md:w-64 md:rounded-xl md:p-4"
                                data-aos="fade-up"
                            >
                                <div className="flex items-center">
                                    <div className="mr-2 rounded-full bg-[#16341f] p-2 text-white md:mr-3 md:p-3">
                                        <i className="fas fa-warehouse text-sm md:text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 md:text-sm">Warehouses</p>
                                        <p className="text-sm font-bold text-[#16341f] md:text-base">Valenzuela & Tarlac</p>
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

export default About;
