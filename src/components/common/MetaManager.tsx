import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaManagerProps {
    title?: string;
    description?: string;
}

const MetaManager = ({ title, description }: MetaManagerProps) => {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = "PixelWings";
        document.title = title ? `${title} | ${baseTitle}` : baseTitle;

        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', description);
        }
    }, [title, description, location]);

    return null;
};

export default MetaManager;
