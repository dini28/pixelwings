import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { ContactUI } from "../UI/Contact";
import MetaManager from "../common/MetaManager";
import { LocationGrid } from "../UI/LocationGrid";

const ContactPage = () => {
    return (
        <main className="bg-black min-h-screen">
            <MetaManager
                description="Re-establish link with PixelWings. Initiate project transmissions or technical inquiries."
            />
            <Header />
            <ContactUI />
            <LocationGrid />
            <Footer />
        </main>
    );
};

export default ContactPage;
