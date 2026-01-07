import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Build from "../UI/Build";
import CTA from "../UI/CTA";
import FAQ from "../UI/FAQ";
import Features from "../UI/Features";
import HeroHome from "../UI/HeroHome";
import Pricing from "../UI/Pricing";
import WhyChooseUs from "../UI/WhyChooseUs";
import MetaManager from "../common/MetaManager";

const Home: React.FC = () => {
    return (
        <>
            <MetaManager
                title="Home"
                description="Engineering high-performance MERN stack applications integrated with custom AI/ML models."
            />
            <Header />
            <HeroHome />
            <Features />
            <Build />
            <WhyChooseUs />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;