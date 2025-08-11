export const footer = () => {
    return (
        <>
            <footer className="bg-[#16341f] py-12 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div>
                            <h3 className="mb-4 text-xl font-bold">DSpeed Cargo</h3>
                            <p className="text-gray-300">Premium logistics and cargo delivery services across the Philippines.</p>
                            <div className="mt-4 flex space-x-4">
                                <a href="#" className="text-gray-300 transition duration-300 hover:text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-300 transition duration-300 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-300 transition duration-300 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-300 transition duration-300 hover:text-white">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#home" className="text-gray-300 transition duration-300 hover:text-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="text-gray-300 transition duration-300 hover:text-white">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className="text-gray-300 transition duration-300 hover:text-white">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#rates" className="text-gray-300 transition duration-300 hover:text-white">
                                        Rates
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-300 transition duration-300 hover:text-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-300 transition duration-300 hover:text-white">
                                        Door to Door
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 transition duration-300 hover:text-white">
                                        Balikbayan Box
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 transition duration-300 hover:text-white">
                                        Trucking
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 transition duration-300 hover:text-white">
                                        Domestic Delivery
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 transition duration-300 hover:text-white">
                                        Per Box Delivery
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold">Contact Info</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#8a1c23]"></i>
                                    <span className="text-gray-300">Mapulang Lupa, Valenzuela City & Moncada, Tarlac</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-phone-alt mt-1 mr-3 text-[#8a1c23]"></i>
                                    <span className="text-gray-300">+63 954 391 0401</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-envelope mt-1 mr-3 text-[#8a1c23]"></i>
                                    <span className="text-gray-300">dspeedcargo@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 DSpeed Cargo. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default footer;
