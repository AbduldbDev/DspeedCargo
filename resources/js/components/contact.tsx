export const contact = () => {
    return (
        <>
            <section id="contact" className="section textured-bg bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center" data-aos="fade-up">
                        <h2 className="mb-4 text-4xl font-bold text-[#16341f]">Contact Us</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">Get in touch with our team</p>
                        <div className="mx-auto h-1 w-20 bg-[#8a1c23]"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="space-y-8" data-aos="fade-right">
                            <div className="flex items-start">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8a1c23] text-white">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-xl font-bold text-[#16341f]">Phone Number</h3>
                                    <p className="text-gray-600">+63 954 391 0401</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#16341f] text-white">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-xl font-bold text-[#16341f]">Email Address</h3>
                                    <p className="text-gray-600">dspeedcargo@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8a1c23] text-white">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-xl font-bold text-[#16341f]">Office Location</h3>
                                    <p className="mb-2 text-gray-600">Manila Warehouse: Mapulang Lupa, Valenzuela City</p>
                                    <p className="text-gray-600">Tarlac Warehouse: Moncada, Tarlac</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#16341f] text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-xl font-bold text-[#16341f]">Facebook</h3>
                                    <p className="text-gray-600">DSpeed Philippines</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-white p-8 shadow-xl" data-aos="fade-left">
                            <h3 className="mb-6 text-2xl font-bold text-[#16341f]">Send us a message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-300 focus:border-[#16341f] focus:ring-2 focus:ring-[#16341f]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-300 focus:border-[#16341f] focus:ring-2 focus:ring-[#16341f]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-300 focus:border-[#16341f] focus:ring-2 focus:ring-[#16341f]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-300 focus:border-[#16341f] focus:ring-2 focus:ring-[#16341f]"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full transform rounded-lg bg-[#16341f] px-6 py-3 font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#8a1c23]"
                                >
                                    Send Message <i className="fas fa-paper-plane ml-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default contact;
