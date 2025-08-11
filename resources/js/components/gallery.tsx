export const gallery = () => {
    return (
        <>
            <section className="textured-bg bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center" data-aos="fade-up">
                        <h2 className="mb-4 text-4xl font-bold text-[#16341f]">Our Gallery</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">Moments from our operations</p>
                        <div className="mx-auto h-1 w-20 bg-[#8a1c23]"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        <div className="transform overflow-hidden rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1608889825205-e4f3b5a6c1f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Gallery 1"
                                className="h-48 w-full object-cover"
                            />
                        </div>
                        <div className="transform overflow-hidden rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1608889825205-e4f3b5a6c1f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Gallery 2"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="transform overflow-hidden rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1608889825205-e4f3b5a6c1f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Gallery 3"
                                className="h-48 w-full object-cover"
                            />
                        </div>
                        <div className="transform overflow-hidden rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1608889825205-e4f3b5a6c1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Gallery 4"
                                className="h-48 w-full object-cover"
                            />
                        </div>
                        <div className="transform overflow-hidden rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1608889825205-e4f3b5a6c1f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Gallery 5"
                                className="h-48 w-full object-cover"
                            />
                        </div>
                        <div className="transform overflow-hidden rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1608889825205-e4f3b5a6c1f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Gallery 6"
                                className="h-48 w-full object-cover"
                            />
                        </div>
                        <div className="transform overflow-hidden rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1608889825205-e4f3b5a6c1f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Gallery 7"
                                className="h-48 w-full object-cover"
                            />
                        </div>
                        <div className="transform overflow-hidden rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1608889825205-e4f3b5a6c1f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Gallery 8"
                                className="h-48 w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default gallery;
