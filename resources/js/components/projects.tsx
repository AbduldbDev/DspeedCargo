export const Projects = () => {
    return (
        <>
            <section id="projects" className="section textured-bg overflow-hidden bg-white py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center md:mb-16" data-aos="fade-up">
                        <h2 className="mb-4 text-3xl font-bold text-[#16341f] md:text-4xl">Latest Projects</h2>
                        <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">Expanding our reach to serve you better</p>
                        <div className="mx-auto mt-4 h-1 w-16 bg-[#8a1c23] md:w-20"></div>
                    </div>

                    <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
                        <div className="space-y-6" data-aos="fade-right">
                            <p className="text-base text-gray-600 md:text-lg">
                                We are establishing Visayas and Mindanao through sea roro delivery direct to customer. As of the moment, we have
                                existing agents and forwarding delivery arm in different areas in Visayas and Mindanao.
                            </p>

                            <div className="bg-opacity-20 rounded-xl border-l-4 border-[#8a1c23] bg-gray-100 p-4 backdrop-blur-md md:p-6">
                                <h3 className="mb-3 text-xl font-bold text-[#16341f] md:mb-4 md:text-xl">Our Fleets:</h3>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <div className="flex items-center">
                                        <i className="fas fa-truck mr-3 text-lg text-[#8a1c23] md:text-xl"></i>
                                        <span className="text-sm text-gray-700 md:text-base">3 - 6-Wheeler Trucks</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-truck-pickup mr-3 text-lg text-[#8a1c23] md:text-xl"></i>
                                        <span className="text-sm text-gray-700 md:text-base">4 - 4-Wheeler Trucks</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-truck-moving mr-3 text-lg text-[#8a1c23] md:text-xl"></i>
                                        <span className="text-sm text-gray-700 md:text-base">2 - 6-Wheeler Forward Trucks</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-truck-monster mr-3 text-lg text-[#8a1c23] md:text-xl"></i>
                                        <span className="text-sm text-gray-700 md:text-base">1 - 10-Wheeler Truck</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-truck mr-3 text-lg text-[#8a1c23] md:text-xl"></i>
                                        <span className="text-sm text-gray-700 md:text-base">1 - Pick-Up Truck</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 md:gap-4" data-aos="fade-left">
                            <div className="overflow-hidden rounded-lg shadow-md md:rounded-xl">
                                <img src="/Images/3.png" alt="Truck Fleet" className="h-40 w-full object-cover md:h-64" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-md md:rounded-xl">
                                <img src="/Images/4.png" alt="Warehouse" className="h-40 w-full object-cover md:h-64" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-md md:rounded-xl">
                                <img src="/Images/5.png" alt="Delivery" className="h-40 w-full object-cover md:h-64" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-md md:rounded-xl">
                                <img src="/Images/6.png" alt="Cargo" className="h-40 w-full object-cover md:h-64" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Projects;
