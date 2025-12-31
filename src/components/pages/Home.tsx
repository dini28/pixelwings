import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Build from "../UI/Build";
import CTA from "../UI/CTA";
import FAQ from "../UI/FAQ";
import Features from "../UI/Features";
import HeroHome from "../UI/HeroHome";
import Pricing from "../UI/Pricing";
import WhyChooseUs from "../UI/WhyChooseUs";

const Home = () => {
    return (
        <>
            <Header />
            <HeroHome />
            <Build />
            <Features />
            <WhyChooseUs />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;