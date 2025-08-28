export const Teams = () => {
    return (
        <>
            <section id="team" className="section textured-bg overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center md:mb-12" data-aos="fade-up">
                        <h2 className="mb-3 text-3xl font-bold text-[#16341f] md:text-4xl">Meet Our Team</h2>
                        <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">The dedicated professionals behind our success</p>
                        <div className="mx-auto mt-3 h-1 w-16 bg-[#8a1c23] md:mt-4 md:w-20"></div>
                    </div>

                    {/* Executive Leadership Section */}
                    <div className="relative mb-10 md:mb-12" data-aos="fade-up">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-3 text-xl font-bold text-[#16341f] md:text-2xl">Executive Leadership</span>
                        </div>
                        <p className="mt-2 text-center text-sm text-gray-500 md:text-base">Guiding our vision and strategy</p>
                    </div>

                    <div className="mb-10 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:mb-12 md:gap-8">
                        <div
                            data-aos="fade-up-right"
                            className="card-hover w-full overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl sm:w-3/4 md:rounded-xl"
                        >
                            <img src="Images/guil.jpg" alt="Angeline A. Francisco" className="h-72 w-full object-cover md:h-80" />
                            <div className="p-4 md:p-6">
                                <h3 className="mb-1 text-lg font-bold text-[#16341f] md:text-xl">DANGARAN, GUILLERMO G.</h3>
                                <p className="text-sm text-gray-500 uppercase md:text-base">CHIEF EXECUTIVE OFFICER (CEO)</p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up-left"
                            className="card-hover w-full overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl sm:w-3/4 md:rounded-xl"
                        >
                            <img src="Images/ceo.webp" alt="Head 2" className="h-72 w-full object-cover md:h-80" />
                            <div className="p-4 md:p-6">
                                <h3 className="mb-1 text-lg font-bold text-[#16341f] md:text-xl">DANGARAN, HELEN B.</h3>
                                <p className="text-sm text-gray-500 md:text-base">HEAD DIRECTOR</p>
                            </div>
                        </div>
                    </div>

                    {/* Valued Associates Section */}
                    <div className="relative mb-10 md:mb-12" data-aos="fade-up">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-3 text-xl font-bold text-[#16341f] md:text-2xl">Valued Associates</span>
                        </div>
                        <p className="mt-2 text-center text-sm text-gray-500 md:text-base">Driving our operations forward</p>
                    </div>

                    <div className="mb-10 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:mb-12 md:gap-8">
                        <div
                            data-aos="fade-up-right"
                            className="card-hover w-full overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl sm:w-3/4 md:rounded-xl"
                        >
                            <img src="Images/ceo.webp" alt="Angeline A. Francisco" className="h-72 w-full object-cover md:h-80" />
                            <div className="p-4 md:p-6">
                                <h3 className="mb-1 text-lg font-bold text-[#16341f] md:text-xl">ANGELINE A. FRANCISCO</h3>
                                <p className="text-sm text-gray-500 md:text-base">WAREHOUSE ADMINISTRATOR - MANILA / CUSTOMER SERVICE</p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up-left"
                            className="card-hover w-full overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl sm:w-3/4 md:rounded-xl"
                        >
                            <img src="Images/Benji.jpg" alt="Head 2" className="h-72 w-full object-cover md:h-80" />
                            <div className="p-4 md:p-6">
                                <h3 className="mb-1 text-lg font-bold text-[#16341f] uppercase md:text-xl">Benjie Panganiban</h3>
                                <p className="text-sm text-gray-500 md:text-base">WAREHOUSE ADMINISTRATOR - MANILA / CUSTOMER SERVICE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Teams;
