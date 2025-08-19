import { useState } from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Services', to: 'services' },
        { name: 'Projects', to: 'projects' },
        { name: 'Rates', to: 'rates' },
        { name: 'Team', to: 'team' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed z-50 w-full bg-white/70 shadow-sm backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between md:h-20">
                    <div className="flex items-center">
                        <div className="flex flex-shrink-0 items-center">
                            <i className="fas fa-shipping-fast mr-2 text-2xl text-[#16341f] md:text-3xl"></i>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-lg font-bold text-[#16341f] md:text-xl"
                            >
                                DSpeed Cargo
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-[#16341f] transition duration-300 hover:text-[#8a1c23]"
                                    activeClass="text-[#8a1c23] font-semibold"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {/* <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="transform cursor-pointer rounded-full bg-[#16341f] px-4 py-1.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#8a1c23] md:px-6 md:py-2"
                            >
                                Get Quote <i className="fas fa-arrow-right ml-1"></i>
                            </Link> */}
                        </div>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center rounded-md p-2 text-[#16341f] focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <i className="fas fa-times text-2xl"></i> : <i className="fas fa-bars text-2xl"></i>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
            >
                <div className="bg-white px-2 pt-2 pb-6 shadow-lg">
                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="block cursor-pointer rounded-md px-3 py-3 text-base font-medium text-[#16341f] transition duration-300 hover:bg-gray-100 hover:text-[#8a1c23]"
                                activeClass="bg-gray-100 text-[#8a1c23]"
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* <div className="px-3 py-3">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="block w-full transform cursor-pointer rounded-full bg-[#16341f] px-4 py-2.5 text-center text-base font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#8a1c23]"
                                onClick={closeMenu}
                            >
                                Get Quote <i className="fas fa-arrow-right ml-1"></i>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
