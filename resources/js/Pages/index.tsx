import { Head } from '@inertiajs/react';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Gallery from '../components/gallery';
import Hero from '../components/hero';
import Loader from '../components/Loader';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import Rates from '../components/rates';
import Services from '../components/services';
import Teams from '../components/teams';
import SmoothScroll from '../utils/SmoothScroll';
export default function Welcome() {
    return (
        <>
            <Head title="Dspeed Cargo">
                <meta name="description" content="Fast and reliable cargo delivery services worldwide" />
                <meta property="og:title" content="Dspeed Cargo" />
                <meta property="og:description" content="Fast and reliable cargo delivery services worldwide" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dspeed Cargo" />
                <meta name="twitter:description" content="Fast and reliable cargo delivery services worldwide" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Loader />
            <SmoothScroll />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Rates />
            <Projects />
            <Teams />
            <Contact />
            <Gallery />
            <Footer />
        </>
    );
}
