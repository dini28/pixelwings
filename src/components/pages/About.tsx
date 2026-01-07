import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AboutHero from "../UI/HeroAbout";
import { Story } from "../UI/Story";
import MetaManager from "../common/MetaManager";
import { CoreValues } from "../UI/CoreValues";
import { TeamCore } from "../UI/TeamCore";

const About = () => {
    return (
        <main className="bg-black min-h-screen">
            <MetaManager
                title="About Us"
                description="Learn about PixelWings - a tech solutions firm specializing in enterprise-grade web applications and intelligent systems."
            />
            <Header />
            <AboutHero />
            <Story />
            <CoreValues />
            <TeamCore />
            <Footer />
        </main>
    );
};

export default About;
