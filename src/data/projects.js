import personalFinanceImg from '../assets/personal_finance.png';
import stockPulseImg from '../assets/stock_pulse.png';
import portfolioPreviewImg from '../assets/portfolio_preview.png';

export const projectsData = [
    {
        id: 'personal-finance-manager',
        title: 'Personal Finance Manager',
        subtitle: 'Full-stack MERN Financial Tracking Application',
        year: 2026,
        category: 'MERN Stack',
        image: personalFinanceImg,
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'JWT', 'bcryptjs', 'Recharts', 'Vite'],
        description: 'A comprehensive personal finance management application that allows users to track their income, expenses, and investments in one place.',
        bullets: [
            'Built a comprehensive personal finance management application using the MERN stack, enabling users to track income, expenses, and investments.',
            'Implemented user authentication and authorization using JWT and bcryptjs, ensuring secure access to personal financial data.',
            'Designed and developed interactive data visualizations with Recharts, providing users with insights into their financial health.',
            'Deployed the application on a cloud platform, ensuring high availability and scalability for users.',
        ],
        githubLink: 'https://github.com/saijaswanthvankadara/personal-finance-manager',
        liveLink: '#'
    },
    {
        id: 'stock-pulse',
        title: 'Stock Pulse',
        subtitle: 'Real-time Stock Market Dashboard',
        year: 2026,
        category: 'Frontend',
        image: stockPulseImg,
        techStack: ['React.js', 'JavaScript', 'Recharts', 'Vite'],
        description: 'A real-time stock market dashboard that provides users with up-to-date information and analytics for various financial instruments.',
        bullets: [
            'Developed a real-time stock market dashboard using React.js and Recharts, providing users with interactive data visualizations.',
            'Implemented a responsive design that works seamlessly across different device sizes, ensuring a consistent user experience.',
            'Integrated with a third-party API to fetch real-time stock market data, enabling users to make informed investment decisions.',
            'Optimized the application for performance, reducing load times and improving the overall user experience.'
        ],
        githubLink: 'https://github.com/saijaswanthvankadara/stock-pulse',
        liveLink: '#'
    },
    {
        id: 'portfolio-website',
        title: 'Interactive Multi-Page Portfolio Website',
        subtitle: 'A personal portfolio website to showcase projects and skills',
        year: 2026,
        category: 'Frontend',
        image: portfolioPreviewImg,
        techStack: ['React.js', 'JavaScript', 'CSS', 'Vite'],
        description: 'An interactive multi-page portfolio website designed to showcase my projects and skills.',
        bullets: [
            'Designed and developed an interactive multi-page portfolio website using React.js and Vite.',
            'Implemented a responsive design that works seamlessly across different device sizes.',
            'Integrated modern UI/UX principles to create an engaging user experience.',
            'Optimized the website for performance and SEO.'
        ],
        githubLink: 'https://github.com/saijaswanthvankadara/portfolio-website',
        liveLink: '#'
    }
];