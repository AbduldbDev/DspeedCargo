export const about = () => {
    return (
        <>
            <section id="about" className="section textured-bg overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center" data-aos="fade-up">
                        <h2 className="mb-4 text-4xl font-bold text-[#16341f]">About DSpeed Cargo</h2>
                        <div className="mx-auto h-1 w-20 bg-[#8a1c23]"></div>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <p className="text-lg text-gray-600" data-aos="fade-right">
                                DSpeed Cargo Delivery Service is one of the premier delivery service based in Tarlac with their warehouses located at
                                Valenzuela City and Tarlac. Working with our OFWs, often known as the "Modern Heroes," gives us great pride and
                                confidence.
                            </p>
                            <p className="text-lg text-gray-600" data-aos="fade-right">
                                Our objective is to satisfy customers and provide high-quality services at cheap prices, all while using our expertise
                                in cargo handling. Thus, our policy is to deliver their balikbayan boxes straight to their families undamaged and
                                fast.
                            </p>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div
                                    className="rounded-xl border-l-4 border-[#8a1c23] bg-white p-6 shadow-md transition duration-300 hover:shadow-lg"
                                    data-aos="fade-up-right"
                                >
                                    <div className="flex items-start">
                                        <div className="mr-4 rounded-full bg-[#16341f] p-3 text-white">
                                            <i className="fas fa-bullseye text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-[#16341f]">MISSION</h3>
                                            <p className="text-gray-600">
                                                DSpeed cargo provides quality door-to-door deliveries with passion and dedication to assure efficient
                                                service to the satisfaction of customers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl border-l-4 border-[#16341f] bg-white p-6 shadow-md transition duration-300 hover:shadow-lg"
                                    data-aos="fade-up-right"
                                >
                                    <div className="flex items-start">
                                        <div className="mr-4 rounded-full bg-[#8a1c23] p-3 text-white">
                                            <i className="fas fa-eye text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-[#16341f]">VISION</h3>
                                            <p className="text-gray-600">
                                                Our vision is to become the best and indispensable partner to our clients by delivering their packages
                                                to their homes quickly, efficiently, and safely.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div data-aos="fade-left" className="-rotate-1 transform rounded-2xl bg-[#8a1c23] p-1 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Warehouse"
                                    className="h-auto w-full rotate-1 transform rounded-2xl shadow-lg"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 z-30 w-64 rounded-xl bg-white p-4 shadow-lg" data-aos="fade-up">
                                <div className="flex items-center">
                                    <div className="mr-3 rounded-full bg-[#16341f] p-3 text-white">
                                        <i className="fas fa-warehouse text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Warehouses</p>
                                        <p className="font-bold text-[#16341f]">Valenzuela & Tarlac</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ;
        </>
    );
};

export default about;
