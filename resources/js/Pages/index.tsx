import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Gallery from '../components/gallery';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import Rates from '../components/rates';
import Services from '../components/services';
import Teams from '../components/teams';
import SmoothScroll from '../utils/SmoothScroll';
export default function Welcome() {
    return (
        <>
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
