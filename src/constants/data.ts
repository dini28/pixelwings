import { Code2, Smartphone, Palette, TrendingUp, Globe } from "lucide-react";

export const SITE_DATA = {
    companyName: "PixelWings",
    tagline: "Engineering Intelligent Platforms",
    contactEmail: "hello@pixelwings.com",
    contactPhone: "+91 123 456 7890",
    location: "Cyber Hub, Gurugram, India",
    socials: {
        twitter: "#",
        instagram: "#",
        github: "#",
        linkedin: "#"
    }
};

export const SERVICES_DATA = [
    {
        id: 'web-development',
        name: 'Full-Stack Engineering',
        code: 'SVC_001',
        icon: Code2,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2072&q=80',
        price: '₹29,999',
        shortDesc: 'Enterprise web platforms',
        fullDescription: 'Production-grade web applications built with modern frameworks. Scalable architecture designed for performance, security, and maintainability at enterprise scale.',
        features: [
            'Responsive multi-device architecture',
            'Server-side rendering optimization',
            'API design and integration',
            'Database schema engineering',
            'Cloud deployment pipeline',
            'Security hardening protocols',
            'Analytics implementation',
            'Performance monitoring'
        ],
        technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
        deliveryTime: '2-4 weeks',
        revisions: 'Unlimited',
        metrics: {
            uptime: '99.9%',
            performance: 'A+',
            security: 'Grade A'
        },
        process: ['Requirements Analysis', 'Architecture Design', 'Development Sprint', 'QA & Deployment']
    },
    {
        id: 'app-development',
        name: 'Mobile Solutions',
        code: 'SVC_002',
        icon: Smartphone,
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2072&q=80',
        price: '₹79,499',
        shortDesc: 'Native & cross-platform',
        fullDescription: 'High-performance mobile applications with native capabilities. Cross-platform development for maximum reach with platform-specific optimization.',
        features: [
            'Native iOS/Android development',
            'Cross-platform React Native',
            'Offline-first architecture',
            'Push notification systems',
            'Biometric authentication',
            'Payment gateway integration',
            'Real-time data synchronization',
            'App store optimization'
        ],
        technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'MongoDB', 'GraphQL'],
        deliveryTime: '3-6 weeks',
        revisions: 'Unlimited',
        metrics: {
            uptime: '99.95%',
            performance: 'A+',
            security: 'Grade A'
        },
        process: ['Platform Analysis', 'UI/UX Engineering', 'Native Development', 'Store Deployment']
    },
    {
        id: 'ui-ux-design',
        name: 'Interface Systems',
        code: 'SVC_003',
        icon: Palette,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2072&q=80',
        price: '₹19,999',
        shortDesc: 'Data-driven UX architecture',
        fullDescription: 'User interface systems built on behavioral data and usability research. Design systems that scale across products while maintaining consistency.',
        features: [
            'User research & analysis',
            'Information architecture',
            'Interactive prototyping',
            'Design system creation',
            'Accessibility compliance',
            'Usability testing protocol',
            'A/B test implementation',
            'Component documentation'
        ],
        technologies: ['Figma', 'Adobe XD', 'Principle', 'Storybook', 'Design Tokens', 'WCAG 2.1'],
        deliveryTime: '1-3 weeks',
        revisions: 'Unlimited',
        metrics: {
            uptime: 'N/A',
            performance: 'A+',
            security: 'N/A'
        },
        process: ['Research Phase', 'Wireframe Development', 'Visual Design', 'Testing & Iteration']
    }
];

export const PRICING_PLANS = [
    {
        id: "01",
        title: "Core Interface",
        description: "High-performance MERN landing pages and brand sites.",
        price: "₹29,999",
        features: [
            "React / Next.js 15 Architecture",
            "SEO & Performance Optimization",
            "Responsive UI Development",
            "3 Months Technical Support",
            "CMS Integration"
        ]
    },
    {
        id: "02",
        title: "Scalable Platform",
        description: "Full-stack applications with custom backend logic.",
        price: "₹79,999",
        features: [
            "Everything in Core Interface",
            "Node / Express Backend",
            "MongoDB Database Design",
            "Advanced User Authentication",
            "API Architecture & Docs"
        ],
        featured: true
    },
    {
        id: "03",
        title: "AI Integration",
        description: "Production-ready apps with custom AI/ML layers.",
        price: "CUSTOM",
        features: [
            "Everything in Scalable Platform",
            "Python / FastAPI Microservices",
            "Custom ML Model Integration",
            "Automated Data Workflows",
            "DevOps & Cloud Deployment"
        ]
    }
];

export const FAQS_DATA = [
    {
        id: "01",
        question: "How does the technical subscription model function?",
        answer: "We operate on a transparent partnership basis. You gain access to our full-stack engineering team (MERN + AI) for a set monthly fee, allowing you to scale up or pause development based on your current sprint requirements."
    },
    {
        id: "02",
        question: "Which technology stack do you prioritize?",
        answer: "Our core competency lies in high-performance architectures using Next.js 15, Node.js, and MongoDB. For AI/ML integrations, we deploy custom Python/FastAPI microservices to ensure modularity and speed."
    },
    {
        id: "03",
        question: "How is the 3-member specialized team structured?",
        answer: "Every project is assigned a dedicated Frontend Architect, a Backend/DevOps Engineer, and an AI/ML Logic Specialist. This ensures specialized focus across the entire application lifecycle, from UI to infrastructure."
    },
    {
        id: "04",
        question: "Can you modernize existing legacy systems?",
        answer: "Yes. We specialize in system migration and refactoring. We can bridge your existing brand guidelines with a modern technical stack, improving performance and SEO without losing your established identity."
    }
];

export const SERVICES_PREVIEW = [
    {
        id: 'full-stack',
        title: 'Full-Stack Engineering',
        description: 'Enterprise-grade application development using MERN architecture. From database design to frontend deployment, we engineer scalable systems built for performance and growth.',
        image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Full-stack development workspace',
        icon: Code2,
        tags: ['React', 'Node.js', 'MongoDB', 'REST APIs']
    },
    {
        id: 'interface-systems',
        title: 'Interface Systems',
        description: 'Data-driven UX architecture optimized for conversion. We design interface systems that reduce friction, accelerate user flows, and drive measurable engagement metrics.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop&crop=center',
        imageAlt: 'Interface design systems',
        icon: Palette,
        tags: ['Design Systems', 'Prototyping', 'A/B Testing', 'Analytics']
    },
    {
        id: 'growth-engineering',
        title: 'Growth Engineering',
        description: 'Technical SEO optimization and performance marketing infrastructure. We implement tracking pipelines, conversion funnels, and analytics systems that turn traffic into revenue.',
        image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=300&fit=crop&crop=center',
        imageAlt: 'Growth analytics dashboard',
        icon: TrendingUp,
        tags: ['SEO', 'Analytics', 'Automation', 'Performance']
    },
    {
        id: 'web-platforms',
        title: 'Web Platform Development',
        description: 'High-performance web applications built with modern frameworks. Static site generation, server-side rendering, and edge computing for maximum speed and reliability.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop&crop=center',
        imageAlt: 'Modern web platform',
        icon: Globe,
        tags: ['Next.js', 'SSR', 'CDN', 'Cloud Deploy']
    }
];
