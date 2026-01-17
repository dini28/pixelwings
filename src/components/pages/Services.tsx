import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ServicesHero from "../UI/HeroServices";
import ServicesItem from "../UI/ServicesCard";
import ServicesDetails from "../UI/ServicesDetails";
import MetaManager from "../common/MetaManager";

const Services = () => {
    return (
        <main className="bg-black min-h-screen">
            <MetaManager
                description="Explore our full-stack engineering, mobile solutions, and data-driven interface systems."
            />
            <Header />
            <ServicesHero />
            <ServicesItem />
            <ServicesDetails />
            <Footer />
        </main>
    );
};

export default Services;
