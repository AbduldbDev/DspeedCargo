import { useEffect, useState } from 'react';

const Loader = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setIsVisible(false), 500);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-9990 flex items-center justify-center bg-white transition-opacity duration-500 ${
                isLoading ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="text-center">
                <div className="relative mx-auto mb-6 h-20 w-20">
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-[#16341f] border-t-[#8a1c23]"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <i className="fas fa-shipping-fast text-2xl text-[#16341f]"></i>
                    </div>
                </div>
                <h3 className="bg-gradient-to-r from-[#16341f] to-[#8a1c23] bg-clip-text text-xl font-bold text-transparent">DSpeed Cargo</h3>
                <p className="mt-2 text-gray-600">Delivering your packages with care...</p>
            </div>
        </div>
    );
};

export default Loader;
