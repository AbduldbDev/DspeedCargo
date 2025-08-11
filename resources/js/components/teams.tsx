export const teams = () => {
    return (
        <>
            <section id="team" className="section textured-bg overflow-hidden bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center" data-aos="fade-up">
                        <h2 className="mb-4 text-4xl font-bold text-[#16341f]">Meet Our Team</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">The dedicated professionals behind our success</p>
                        <div className="mx-auto h-1 w-20 bg-[#8a1c23]"></div>
                    </div>

                    <h3 className="mb-6 text-center text-2xl font-bold text-[#16341f]" data-aos="fade-up">
                        Executives
                    </h3>

                    <div className="mb-12 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2">
                        <div
                            data-aos="fade-up-right"
                            className="card-hover w-full overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-xl sm:w-3/4"
                        >
                            <img src="Images/ceo.jpg" alt="Angeline A. Francisco" className="h-90 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="mb-1 text-xl font-bold text-[#16341f]">DANGARAN, GUILLERMO G.</h3>
                                <p className="text-gray-500 uppercase">CHIEF EXECUTIVE OFFICER (CEO)</p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up-left"
                            className="card-hover w-full overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-xl sm:w-3/4"
                        >
                            <img src="Images/ceo.jpg" alt="Head 2" className="h-90 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="mb-1 text-xl font-bold text-[#16341f]">DANGARAN, HELEN B.</h3>
                                <p className="text-gray-500">HEAD DIRECTOR</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="mb-6 text-center text-2xl font-bold text-[#16341f]" data-aos="fade-up">
                        Associates
                    </h3>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div
                            data-aos="fade-up-right"
                            className="card-hover overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-xl"
                        >
                            <img src="Images/ceo.jpg" alt="Team Member 1" className="h-90 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="mb-1 text-xl font-bold text-[#16341f]">CINDY A. SALAZAR</h3>
                                <p className="text-gray-500">WAREHOUSE ADMINISTRATOR - MANILA / CUSTOMER SERVICE</p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="card-hover overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-xl"
                        >
                            <img src="Images/ceo.jpg" alt="Team Member 2" className="h-90 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="mb-1 text-xl font-bold text-[#16341f]">ANGELINE A. FRANCISCO</h3>
                                <p className="text-gray-500">WAREHOUSE ADMINISTRATOR - MANILA / CUSTOMER SERVICE</p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up-left"
                            className="card-hover overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-xl"
                        >
                            <img src="Images/ceo.jpg" alt="Team Member 3" className="h-90 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="mb-1 text-xl font-bold text-[#16341f]">LIZA JANE C. VIDAL</h3>
                                <p className="text-gray-500">ACCOUNTING STAFF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default teams;
