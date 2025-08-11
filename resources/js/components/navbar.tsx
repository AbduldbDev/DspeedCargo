export const navbar = () => {
    return (
        <nav className="bg-opacity-90 fixed z-50 w-full bg-white shadow-sm backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex flex-shrink-0 items-center">
                            <i className="fas fa-shipping-fast mr-2 text-3xl text-[#16341f]"></i>
                            <span className="text-xl font-bold text-[#16341f]">DSpeed Cargo</span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <a
                                href="#home"
                                className="rounded-md px-3 py-2 text-sm font-medium text-[#16341f] transition duration-300 hover:text-[#8a1c23]"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="rounded-md px-3 py-2 text-sm font-medium text-[#16341f] transition duration-300 hover:text-[#8a1c23]"
                            >
                                About
                            </a>
                            <a
                                href="#services"
                                className="rounded-md px-3 py-2 text-sm font-medium text-[#16341f] transition duration-300 hover:text-[#8a1c23]"
                            >
                                Services
                            </a>
                            <a
                                href="#projects"
                                className="rounded-md px-3 py-2 text-sm font-medium text-[#16341f] transition duration-300 hover:text-[#8a1c23]"
                            >
                                Projects
                            </a>
                            <a
                                href="#rates"
                                className="rounded-md px-3 py-2 text-sm font-medium text-[#16341f] transition duration-300 hover:text-[#8a1c23]"
                            >
                                Rates
                            </a>
                            <a
                                href="#team"
                                className="rounded-md px-3 py-2 text-sm font-medium text-[#16341f] transition duration-300 hover:text-[#8a1c23]"
                            >
                                Team
                            </a>
                            <a
                                href="#contact"
                                className="rounded-md px-3 py-2 text-sm font-medium text-[#16341f] transition duration-300 hover:text-[#8a1c23]"
                            >
                                Contact
                            </a>
                            <button className="transform rounded-full bg-[#16341f] px-6 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#8a1c23]">
                                Get Quote <i className="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button className="inline-flex items-center justify-center rounded-md p-2 text-[#16341f] focus:outline-none">
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default navbar;
