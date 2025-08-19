export const rates = () => {
    return (
        <>
            <section id="rates" className="section textured-bg overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center" data-aos="fade-up">
                        <h2 className="mb-4 text-4xl font-bold text-[#16341f]">Our Rates</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">Transparent and competitive pricing</p>
                        <div className="mx-auto h-1 w-20 bg-[#8a1c23]"></div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200" className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl">
                        <div className="bg-[#16341f] p-6 text-white">
                            <h3 className="text-center text-2xl font-bold">1 x 40 CONTAINER RATE</h3>
                        </div>
                        <div className="p-8">
                            <div className="mb-8 text-center">
                                <p className="text-4xl font-bold text-[#8a1c23]">PHP 350,000.00</p>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-[#16341f]">INCLUSIONS:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-check mt-1 mr-3 text-[#8a1c23]"></i>
                                        <span className="text-gray-700">Customs Clearance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check mt-1 mr-3 text-[#8a1c23]"></i>
                                        <span className="text-gray-700">Delivery Transportation to Luzon, Visayas and Mindanao</span>
                                    </li>
                                </ul>

                                <div className="rounded border-l-4 border-yellow-400 bg-yellow-50 p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <i className="fas fa-exclamation-circle text-yellow-500"></i>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-yellow-700">
                                                <span className="font-bold">NOTE:</span> Boxes to Visayas and Mindanao are limited to 70 boxes only.
                                                If exceeds to 70 boxes, the rest will be charged for additional payment.
                                            </p>
                                        </div>
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

export default rates;
