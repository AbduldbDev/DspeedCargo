import { useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

type FormData = {
    name: string;
    email: string;
    number: string;
    subject: string;
    message: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    csrf_token: string;
};

export const Contact = () => {
    const { flash, errors } = usePage<PageProps>().props;
    const [showSuccess, setShowSuccess] = useState(false);

    const form = useForm<FormData>({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
    });

    // Reset form on successful submission
    useEffect(() => {
        if (flash?.success) {
            setShowSuccess(true);
            form.reset();

            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [flash?.success]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/contactus`, {
            forceFormData: true,
            onSuccess: () => {},
        });
    };

    return (
        <>
            {showSuccess && (
                <div className="animate-fade-in fixed top-20 right-4 z-50 lg:top-30">
                    <div className="flex max-w-xs items-center space-x-3 rounded-lg border-b-4 border-green-500 bg-white p-4 text-gray-800 shadow-lg">
                        <div className="animate-pulse">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium">{flash?.success}</p>
                        </div>
                        <button onClick={() => setShowSuccess(false)} className="text-gray-400 hover:text-gray-600">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            <section id="contact" className="section overflow-hidden bg-white py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center md:mb-16" data-aos="fade-up">
                        {/* {errors?.mail_error && <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">{errors.mail_error}</div>} */}

                        <h2 className="mb-3 text-3xl font-bold text-[#16341f] md:text-4xl">Contact Us</h2>
                        <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">Get in touch with our team</p>
                        <div className="mx-auto mt-3 h-1 w-16 bg-[#8a1c23] md:w-20"></div>
                    </div>

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                        {/* Contact Information - Allow natural height */}
                        <div className="space-y-6 md:space-y-8 lg:w-1/2" data-aos="fade-right">
                            <div className="flex items-start">
                                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8a1c23] text-white md:h-12 md:w-12">
                                    <i className="fas fa-phone-alt text-sm md:text-base"></i>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-[#16341f] md:text-xl">Phone Number</h3>
                                    <a href="tel:+639543910401" className="block text-gray-600 transition-colors hover:text-[#8a1c23]">
                                        +63 954 391 0401
                                    </a>
                                    <p className="mt-1 text-xs text-gray-500">Tap to call</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#16341f] text-white md:h-12 md:w-12">
                                    <i className="fas fa-envelope text-sm md:text-base"></i>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-[#16341f] md:text-xl">Email Address</h3>
                                    <a href="mailto:dspeedcargo@gmail.com" className="block text-gray-600 transition-colors hover:text-[#8a1c23]">
                                        dspeedcargo@gmail.com
                                    </a>
                                    <p className="mt-1 text-xs text-gray-500">Tap to email</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8a1c23] text-white md:h-12 md:w-12">
                                    <i className="fab fa-facebook-f text-sm md:text-base"></i>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-[#16341f] md:text-xl">Facebook</h3>
                                    <a
                                        href="https://www.facebook.com/DSpeedCargo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-gray-600 transition-colors hover:text-[#8a1c23]"
                                    >
                                        DSpeed Philippines
                                    </a>
                                    <p className="mt-1 text-xs text-gray-500">Tap to visit our page</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#16341f] text-white md:h-12 md:w-12">
                                    <i className="fas fa-map-marker-alt text-sm md:text-base"></i>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-[#16341f] md:text-xl">Office Location</h3>
                                    <p className="mb-1 text-gray-600 md:mb-2">Manila Warehouse: Mapulang Lupa, Valenzuela City</p>
                                    <p className="text-gray-600">Tarlac Warehouse: Moncada, Tarlac</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Allow natural height */}
                        <div
                            className="rounded-lg border-1 border-gray-100 bg-white p-5 shadow-lg md:rounded-xl md:p-8 lg:w-1/2 lg:self-start"
                            data-aos="fade-left"
                        >
                            <h3 className="mb-4 text-xl font-bold text-[#16341f] md:mb-5 md:text-2xl">Send us a message</h3>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={form.data.name}
                                        onChange={(e) => form.setData('name', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition duration-300 focus:border-[#16341f] focus:ring-2 focus:ring-[#16341f] md:text-base"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={form.data.email}
                                        onChange={(e) => form.setData('email', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition duration-300 focus:border-[#16341f] focus:ring-2 focus:ring-[#16341f] md:text-base"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={form.data.number}
                                        onChange={(e) => form.setData('number', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition duration-300 focus:border-[#16341f] focus:ring-2 focus:ring-[#16341f] md:text-base"
                                        placeholder="+63 900 000 0000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        value={form.data.subject}
                                        onChange={(e) => form.setData('subject', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition duration-300 focus:border-[#16341f] focus:ring-2 focus:ring-[#16341f] md:text-base"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="delivery">Delivery Inquiry</option>
                                        <option value="pricing">Pricing</option>
                                        <option value="tracking">Package Tracking</option>
                                        <option value="complaint">Complaint</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={form.data.message}
                                        onChange={(e) => form.setData('message', e.target.value)}
                                        rows={4}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition duration-300 focus:border-[#16341f] focus:ring-2 focus:ring-[#16341f] md:text-base"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full transform rounded-lg bg-[#16341f] px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#8a1c23] active:scale-95 md:px-6 md:py-3 md:text-base"
                                >
                                    Send Message <i className="fas fa-paper-plane ml-2"></i>
                                </button>
                            </form>

                            {/* Quick Contact Options for Mobile */}
                            <div className="mt-6 flex flex-col gap-3 md:hidden">
                                <p className="text-center text-sm text-gray-600">Or contact us directly:</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <a
                                        href="tel:+639543910401"
                                        className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-xs text-white transition-colors hover:bg-green-700"
                                    >
                                        <i className="fas fa-phone"></i>
                                        Call Now
                                    </a>
                                    <a
                                        href="https://m.me/DSpeedCargo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs text-white transition-colors hover:bg-blue-700"
                                    >
                                        <i className="fab fa-facebook-messenger"></i>
                                        Messenger
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Maps Section - Moved to bottom */}
                    <div className="mt-12 md:mt-16" data-aos="fade-up">
                        <h3 className="mb-6 text-center text-2xl font-bold text-[#16341f] md:mb-8 md:text-3xl">Our Warehouse Locations</h3>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Manila Warehouse */}
                            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm md:rounded-xl md:p-6">
                                <h4 className="mb-3 flex items-center justify-center text-xl font-semibold text-[#16341f] md:justify-start">
                                    <i className="fas fa-warehouse mr-2 text-[#8a1c23]"></i>
                                    Manila Warehouse
                                </h4>
                                <p className="mb-4 text-center text-gray-600 md:mb-5 md:text-left">Mapulang Lupa, Valenzuela City</p>
                                <div className="overflow-hidden rounded-lg bg-gray-200 md:rounded-xl">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15420.275332126815!2d120.9768306683791!3d14.888722800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ad6db6bd2a2f%3A0xef58e97b358e5c6f!2sMapulang%20Lupa%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg"
                                        title="Manila Warehouse Location"
                                    ></iframe>
                                </div>
                                <div className="mt-4 text-center md:text-left">
                                    <a
                                        href="https://maps.google.com/?q=Mapulang+Lupa,Valenzuela+City"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-[#8a1c23] hover:underline"
                                    >
                                        <i className="fas fa-directions mr-2"></i>
                                        Get directions
                                    </a>
                                </div>
                            </div>

                            {/* Tarlac Warehouse */}
                            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm md:rounded-xl md:p-6">
                                <h4 className="mb-3 flex items-center justify-center text-xl font-semibold text-[#16341f] md:justify-start">
                                    <i className="fas fa-warehouse mr-2 text-[#8a1c23]"></i>
                                    Tarlac Warehouse
                                </h4>
                                <p className="mb-4 text-center text-gray-600 md:mb-5 md:text-left">Moncada, Tarlac</p>
                                <div className="overflow-hidden rounded-lg bg-gray-200 md:rounded-xl">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15420.275332126815!2d120.9768306683791!3d14.888722800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ad6db6bd2a2f%3A0xef58e97b358e5c6f!2sMoncada%2C%20Tarlac!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg"
                                        title="Tarlac Warehouse Location"
                                    ></iframe>
                                </div>
                                <div className="mt-4 text-center md:text-left">
                                    <a
                                        href="https://maps.google.com/?q=Moncada,Tarlac"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-[#8a1c23] hover:underline"
                                    >
                                        <i className="fas fa-directions mr-2"></i>
                                        Get directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contact;
