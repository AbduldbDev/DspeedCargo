export const projects = () => {
    return (
        <>
            <section id="projects" className="section textured-bg overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center" data-aos="fade-up">
                        <h2 className="mb-4 text-4xl font-bold text-[#16341f]">Latest Projects</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">Expanding our reach to serve you better</p>
                        <div className="mx-auto h-1 w-20 bg-[#8a1c23]"></div>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className="space-y-6" data-aos="fade-right">
                            <p className="text-lg text-gray-600">
                                We are establishing Visayas and Mindanao through sea roro delivery direct to customer. As of the moment, we have
                                existing agents and forwarding delivery arm in different areas in Visayas and Mindanao.
                            </p>

                            <div className="bg-opacity-20 rounded-xl border-l-4 border-[#8a1c23] bg-gray-300 p-6 backdrop-blur-md">
                                <h3 className="mb-4 text-xl font-bold text-[#16341f]">Our Fleets:</h3>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="flex items-center">
                                        <i className="fas fa-truck mr-3 text-xl text-[#8a1c23]"></i>
                                        <span className="text-gray-700">3 - 6-Wheeler Trucks</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-truck-pickup mr-3 text-xl text-[#8a1c23]"></i>
                                        <span className="text-gray-700">4 - 4-Wheeler Trucks</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-truck-moving mr-3 text-xl text-[#8a1c23]"></i>
                                        <span className="text-gray-700">2 - 6-Wheeler Forward Trucks</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-truck-monster mr-3 text-xl text-[#8a1c23]"></i>
                                        <span className="text-gray-700">1 - 10-Wheeler Truck</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-truck mr-3 text-xl text-[#8a1c23]"></i>
                                        <span className="text-gray-700">1 - Pick-Up Truck</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <img src="/Images/3.png" alt="Truck Fleet" className="h-64 w-full object-cover" />
                            </div>
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <img src="/Images/4.png" alt="Warehouse" className="h-64 w-full object-cover" />
                            </div>
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <img src="/Images/5.png" alt="Delivery" className="h-64 w-full object-cover" />
                            </div>
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <img src="/Images/6.png" alt="Cargo" className="h-64 w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default projects;
