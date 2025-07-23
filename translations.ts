

import type { Project, Skill, Achievement, Education, Certification, Testimonial } from './types';

// We omit ReactNode types for JSON-like storage
type TranslatableAchievement = Omit<Achievement, 'icon'>;

export interface Translation {
    navLinks: { href: string; label: string; id: string; }[];
    hero: {
        subtitle: string;
    };
    sections: {
        about: string;
        experience: string;
        personal_projects: string;
        other_projects: string;
        achievements: string;
        testimonials: string;
        certifications: string;
        education_languages: string;
        contact: string;
    };
    bento: {
        hello: string;
        bio: string;
        toolkit: string;
        linkedin_title: string;
        linkedin_subtitle: string;
    };
    quote: {
        line1: string;
        author: string;
    };
    professionalExperience: Project[];
    personalAcademicProjects: Project[];
    otherProjects: Project[];
    buttons: {
        show_more: string;
        show_less: string;
    };
    achievements: TranslatableAchievement[];
    testimonials: Testimonial[];
    education: {
        title: string;
        items: Education[];
    };
    languages: {
        title: string;
        items: { name: string; level: string; }[];
    };
    certifications: Certification[];
    contact: {
        title: string;
        subtitle: string;
    };
    footer: {
        copyright: string;
    };
    modal: {
        stack: string;
        visit: string;
    };
}


export const translations: { en: Translation; es: Translation; } = {
    en: {
        navLinks: [
            { href: '#about', label: 'About', id: 'about' },
            { href: '#experience', label: 'Experience', id: 'experience' },
            { href: '#personal-projects', label: 'Featured', id: 'personal-projects' },
            { href: '#other-projects', label: 'Other', id: 'other-projects' },
            { href: '#achievements', label: 'Achievements', id: 'achievements' },
            { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
            { href: '#certifications', label: 'Certifications', id: 'certifications' },
            { href: '#education', label: 'Education', id: 'education' },
            { href: '#contact', label: 'Contact', id: 'contact' },
        ],
        hero: {
            subtitle: "Full Stack Developer | AI & Automation"
        },
        sections: {
            about: "About Me",
            experience: "Experience",
            personal_projects: "Featured Projects",
            other_projects: "Other Projects",
            achievements: "Achievements",
            testimonials: "Testimonials",
            certifications: "Certifications",
            education_languages: "Education & Languages",
            contact: "Get In Touch",
        },
        bento: {
            hello: "Hello, I'm Mauro.",
            bio: "A Full Stack Developer passionate about combining technology and creativity. With a degree in Audiovisual Communication and professional experience in both frontend and backend development, I thrive on building impactful digital experiences. My background includes web development, <strong>AI, automation</strong>, and API integrations, with a constant drive for learning and innovation within collaborative teams.",
            toolkit: "Core Toolkit",
            linkedin_title: "LinkedIn",
            linkedin_subtitle: "Connect with me",
        },
        quote: {
            line1: "I write <span class=\"underline decoration-sky-400 decoration-2 underline-offset-4\">more code</span> to write <span class=\"underline decoration-sky-400 decoration-2 underline-offset-4\">less code</span>.",
            author: "– Mauro Ciappina"
        },
        professionalExperience: [
          {
            name: "Dazlab",
            role: "Backend Developer",
            stack: ["WebSocket", "Akee", "Stripe", "SCRUM"],
            timeline: "Oct 2024 – Jun 2025",
            description: "Developed the game backend, focusing on data modeling, CRUD operations, and real-time communication using WebSockets. Integrated Akee for game logic and Stripe for payments within a SCRUM team.",
            image: "https://picsum.photos/seed/Dazlab/500/300",
          },
          {
            name: "Hows Advisor",
            role: "Full Stack Developer",
            stack: ["TypeScript", "React", "Zustand", "Sequelize", "Tailwind CSS", "Stripe"],
            timeline: "Mar 2024 – May 2024",
            description: "Contributed to a B2B platform, building features with a modern stack. Handled both frontend state management with Zustand and backend ORM tasks with Sequelize.",
            image: "https://picsum.photos/seed/HowsAdvisor/500/300",
          },
          {
            name: "Packar",
            role: "Full Stack Developer",
            stack: ["TypeScript", "Next.js", "NextAuth", "MongoDB", "Node.js"],
            timeline: "Dec 2023 – Apr 2024",
            description: "Built a C2C/B2B SaaS application. Implemented secure authentication with NextAuth, managed data with MongoDB, and developed server-side logic with Node.js in a Next.js environment.",
            image: "https://picsum.photos/seed/Packar/500/300",
          },
        ],
        personalAcademicProjects: [
            {
                name: "Personal Automation Bot",
                role: "Personal AI Automation System",
                stack: ["Python", "Telegram Bot API", "Google APIs", "Groq AI", "FAISS", "OAuth 2.0", "pytest", "Git"],
                timeline: "2025",
                description: "Developed a Telegram bot that integrates Gmail, Google Calendar, Google Drive, and AI services to automate productivity tasks. Implemented a custom RAG system, workflow engine, and modular architecture in Python.",
                image: "https://picsum.photos/seed/AutomationBot/500/300",
                link: "https://github.com/mauroociappinaph/BOOTKIRO",
            },
            {
                name: "PostulateOk",
                role: "Frontend Developer",
                stack: ["React", "TypeScript", "Vite", "TailwindCSS", "ESLint", "Prettier", "Commitlint", "Husky", "Zustand", "Jest"],
                timeline: "Collaboration Project",
                description: "Geared towards managing applications or selection processes. It allows users to interact with offers, submit applications, and manage relevant information efficiently and accessibly.",
                image: "https://picsum.photos/seed/PostulateOk/500/300",
                link: "https://www.postulateok.com/landing",
            },
            {
                name: "HttpLazy",
                role: "Personal npm library",
                stack: ["JavaScript", "TypeScript", "NPM"],
                timeline: "v2.5.2",
                description: "A modular JS/TS API toolkit designed for simplicity and flexibility, featuring built-in authentication, retries, error handling, and interceptors.",
                image: "https://picsum.photos/seed/HttpLazy/500/300",
                link: "https://www.npmjs.com/package/httplazy",
            },
            {
                name: "Deal Up!",
                role: "Full Stack Developer (Henry Capstone)",
                stack: ["Next.js", "Redux Toolkit", "Node.js", "SCRUM"],
                timeline: "Jan 2023 – Aug 2023",
                description: "Capstone project creating an app to connect entrepreneurs and investors. Used Redux Toolkit for complex state management and worked within a SCRUM framework to deliver the final product.",
                image: "https://picsum.photos/seed/DealUp/500/300",
                link: "https://start-bussines-n21ptnn46-adielhdz.vercel.app/",
            },
        ],
        otherProjects: [
            {
                name: "Stellar",
                role: "AI-powered Design Generator",
                stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Google Gemini 2.5 Flash API"],
                timeline: "Personal Project",
                description: "A modern web app that uses Google Gemini AI to generate cohesive color palettes and font combinations for web design. Built for designers and developers seeking fast, professional visual inspiration.",
                image: "https://picsum.photos/seed/Stellar/500/300",
                link: "https://stellar-five-psi.vercel.app/",
            },
            {
                name: "Pokedex",
                role: "Frontend Project",
                stack: ["React", "TypeScript", "Pokemon API"],
                timeline: "Personal Project",
                description: "Pokedex consuming data from the Pokemon API. Allows viewing all Pokémon and their specific data.",
                image: "https://picsum.photos/seed/Pokedex/500/300",
                link: "https://pokedex-typescript-reactmc.netlify.app/",
            },
            {
                name: "Currency Converter",
                role: "Frontend Project",
                stack: ["React", "JavaScript", "API"],
                timeline: "Personal Project",
                description: "A web application for currency conversion. It allows calculating the exchange rate between two types of currencies.",
                image: "https://picsum.photos/seed/Cotizador/500/300",
                link: "https://cotizadorbymauroociappina.netlify.app/",
            },
            {
                name: "Shopping Cart",
                role: "Frontend Project",
                stack: ["React", "JavaScript"],
                timeline: "Personal Project",
                description: "A web application that simulates a shopping cart, allowing users to add and remove products.",
                image: "https://picsum.photos/seed/ShoppingCart/500/300",
                link: "https://carritodecompraciappina.netlify.app/",
            },
            {
                name: "Festival Rock",
                role: "Frontend Project",
                stack: ["HTML", "CSS", "JavaScript"],
                timeline: "Personal Project",
                description: "A web application dedicated to a music festival. It features a line-up, concert schedules, and an interactive photo gallery.",
                image: "https://picsum.photos/seed/FestivalRock/500/300",
                link: "https://rockfestivalmdp2022.netlify.app/",
            },
            {
                name: "Coffe Shop",
                role: "Frontend Project",
                stack: ["HTML", "CSS", "JavaScript"],
                timeline: "Personal Project",
                description: "A web application for a coffee shop. It features a menu, photos, an 'About Us' page, product descriptions, and a contact form.",
                image: "https://picsum.photos/seed/CoffeeShop/500/300",
                link: "https://blogcafeciappina.netlify.app/",
            },
            {
                name: "Pixabay Image Search",
                role: "Frontend Project",
                stack: ["HTML", "CSS", "JavaScript", "API"],
                timeline: "Personal Project",
                description: "A web application that connects to the Pixabay API to allow users to search for and view high-quality images.",
                image: "https://picsum.photos/seed/PixabaySearch/500/300",
                link: "https://api-pixabay-buscador-mauroo-ciappina.netlify.app/",
            },
            {
                name: "Photography Store",
                role: "Frontend Project",
                stack: ["HTML", "CSS", "JavaScript"],
                timeline: "Jan 2022",
                description: "An online photography store built with JavaScript, HTML, and CSS. The platform allows users to browse and purchase photography products and services, featuring a shopping cart and user registration.",
                image: "https://picsum.photos/seed/PhotographyStore/500/300",
            }
        ],
        buttons: {
            show_more: "Show More",
            show_less: "Show Less",
        },
        achievements: [
            {
                title: "Personal Automation Bot Development",
                description: "Developed an advanced AI-powered Telegram bot integrating Gmail, Google Calendar, Google Drive, and AI services with custom RAG system and modular Python architecture for productivity automation.",
            },
            {
                title: "HttpLazy Published on NPM",
                description: "Successfully published 'HttpLazy', an open-source library recognized for its flexibility and modular design in handling API requests.",
            },
            {
                title: "Henry Bootcamp Capstone Presentation",
                description: "Presented “Deal Up!” at the Henry Bootcamp Demo Day, showcasing a full-stack application combining a modern frontend with a robust backend.",
            },
            {
                title: "Deep Tech Summit 2025 Attendee",
                description: "Actively participated in the Deep Tech Summit, engaging with discussions on AI, biotech, and the future of technology.",
            }
        ],
        testimonials: [
            {
                quote: "From day one, Mauro demonstrated a rapid adaptation to the work environment, always dedicated and with a great sense of responsibility. He brings his full commitment to every task, showing professionalism in every idea and contribution to the team.",
                author: "Jon Nahuel Pereyra",
                title: "Head of Backend at Dazlab"
            },
            {
                quote: "Mauro's development of the Packar platform was outstanding. He expertly translated our business vision into a robust, high-quality SaaS application, demonstrating exceptional full-stack skills. His commitment and professionalism were exemplary, delivering a product that exceeded our expectations.",
                author: "Antonio Medina Vázquez",
                title: "Founder & CEO at Packar"
            },
            {
                quote: "Mauro is an ingenious and efficient programmer who tackles complex challenges with creativity. His ability to find innovative solutions, adapt to new technologies, and write clean, high-quality code makes him an invaluable asset. He is also a great collaborator, always willing to share his knowledge and elevate the team's standards.",
                author: "Xavier Montero",
                title: "Backend Developer at Dazlab"
            }
        ],
        education: {
            title: "Education",
            items: [
                {
                    degree: "Full Stack Developer",
                    institution: "Henry Bootcamp",
                    timeline: "Jan 2023 – Aug 2023"
                },
                {
                    degree: "Audiovisual Communication",
                    institution: "Universidad Nacional de Mar del Plata",
                    timeline: "Mar 2018 – Dec 2022"
                }
            ],
        },
        languages: {
            title: "Languages",
            items: [
                { name: "Spanish", level: "Native" },
                { name: "English", level: "B1 - Intermediate" }
            ],
        },
        certifications: [
            {
                name: "Lean Six Sigma White Belt",
                issuer: "CertiProf",
                date: "Issued Oct 2024",
                description: "Introduction to key process improvement concepts using Lean and Six Sigma methodologies."
            },
            {
                name: "Backend Programming",
                issuer: "Argentina Programa – TICMAS",
                date: "Issued May 2023",
                description: "A course focused on server-side development, covering key concepts for building robust backend systems."
            },
            {
                name: "Intro to Programming",
                issuer: "Argentina Programa – TICMAS",
                date: "Issued Feb 2023",
                description: "An introductory course covering the fundamental concepts of programming logic and problem-solving."
            },
            {
                name: "JavaScript Algorithms and Data Structures",
                issuer: "freeCodeCamp",
                date: "Issued Jun 2023 | 300 hours",
                description: "This comprehensive course delves into algorithms, data structures, and both functional and object-oriented programming in JavaScript."
            },
            {
                name: "Scrum: Fundamentals of Agile Project Management",
                issuer: "LinkedIn",
                date: "Issued Jul 2023",
                credentialId: "AUg5UlGKkoMIKD3W7z5o4Qz2",
                description: "Introduces the agile Scrum methodology, its roles, events, and artifacts to improve project management and team collaboration."
            },
            {
                name: "Instagram for Entrepreneurs",
                issuer: "Luzzi Digital",
                date: "Issued Jul 2021",
                description: "Teaches strategies for entrepreneurs looking to enhance their brand and sales through Instagram, covering content creation, follower growth, and advertising."
            }
        ],
        contact: {
            title: "Let's build something great.",
            subtitle: "I'm currently open to new opportunities and collaborations. Have a project in mind or just want to say hello? My inbox is always open.",
        },
        footer: {
            copyright: "All Rights Reserved."
        },
        modal: {
            stack: "Tech Stack",
            visit: "Visit Project"
        }
    },
    es: {
        navLinks: [
            { href: '#about', label: 'Sobre mí', id: 'about' },
            { href: '#experience', label: 'Experiencia', id: 'experience' },
            { href: '#personal-projects', label: 'Destacados', id: 'personal-projects' },
            { href: '#other-projects', label: 'Otros', id: 'other-projects' },
            { href: '#achievements', label: 'Logros', id: 'achievements' },
            { href: '#testimonials', label: 'Testimonios', id: 'testimonials' },
            { href: '#certifications', label: 'Certificados', id: 'certifications' },
            { href: '#education', label: 'Educación', id: 'education' },
            { href: '#contact', label: 'Contacto', id: 'contact' },
        ],
        hero: {
            subtitle: "Desarrollador Full Stack | IA y Automatización"
        },
        sections: {
            about: "Sobre Mí",
            experience: "Experiencia",
            personal_projects: "Proyectos Destacados",
            other_projects: "Otros Proyectos",
            achievements: "Logros",
            testimonials: "Testimonios",
            certifications: "Certificaciones",
            education_languages: "Educación e Idiomas",
            contact: "Contáctame",
        },
        bento: {
            hello: "Hola, soy Mauro.",
            bio: "Un Desarrollador Full Stack apasionado por combinar tecnología y creatividad. Con una licenciatura en Comunicación Audiovisual y experiencia profesional en desarrollo frontend y backend, me dedico a construir experiencias digitales impactantes. Mi trayectoria incluye desarrollo web, <strong>IA, automatización</strong> e integraciones de API, con un impulso constante por aprender e innovar en equipos colaborativos.",
            toolkit: "Herramientas Principales",
            linkedin_title: "LinkedIn",
            linkedin_subtitle: "Conecta conmigo",
        },
        quote: {
            line1: "Escribo <span class=\"underline decoration-sky-400 decoration-2 underline-offset-4\">más código</span> para escribir <span class=\"underline decoration-sky-400 decoration-2 underline-offset-4\">menos código</span>.",
            author: "– Mauro Ciappina"
        },
        professionalExperience: [
          {
            name: "Dazlab",
            role: "Desarrollador Backend",
            stack: ["WebSocket", "Akee", "Stripe", "SCRUM"],
            timeline: "Oct 2024 – Jun 2025",
            description: "Desarrollé el backend del juego, enfocándome en el modelado de datos, operaciones CRUD y comunicación en tiempo real usando WebSockets. Integré Akee para la lógica del juego y Stripe para los pagos dentro de un equipo SCRUM.",
            image: "https://picsum.photos/seed/Dazlab/500/300",
          },
          {
            name: "Hows Advisor",
            role: "Desarrollador Full Stack",
            stack: ["TypeScript", "React", "Zustand", "Sequelize", "Tailwind CSS", "Stripe"],
            timeline: "Mar 2024 – May 2024",
            description: "Contribuí a una plataforma B2B, construyendo funcionalidades con un stack moderno. Manejé tanto la gestión de estado del frontend con Zustand como las tareas de ORM del backend con Sequelize.",
            image: "https://picsum.photos/seed/HowsAdvisor/500/300",
          },
          {
            name: "Packar",
            role: "Desarrollador Full Stack",
            stack: ["TypeScript", "Next.js", "NextAuth", "MongoDB", "Node.js"],
            timeline: "Dic 2023 – Abr 2024",
            description: "Construí una aplicación SaaS C2C/B2B. Implementé autenticación segura con NextAuth, gestioné datos con MongoDB y desarrollé la lógica del servidor con Node.js en un entorno Next.js.",
            image: "https://picsum.photos/seed/Packar/500/300",
          },
        ],
        personalAcademicProjects: [
            {
                name: "Personal Automation Bot",
                role: "Sistema de automatización personal con IA",
                stack: ["Python", "Telegram Bot API", "Google APIs", "Groq AI", "FAISS", "OAuth 2.0", "pytest", "Git"],
                timeline: "2025",
                description: "Desarrollé un bot de Telegram que integra Gmail, Google Calendar, Google Drive y servicios de IA para automatizar tareas de productividad. Implementé un sistema RAG personalizado, motor de workflows, y arquitectura modular en Python.",
                image: "https://picsum.photos/seed/AutomationBot/500/300",
                link: "https://github.com/mauroociappinaph/BOOTKIRO",
            },
            {
                name: "PostulateOk",
                role: "Desarrollador Frontend",
                stack: ["React", "TypeScript", "Vite", "TailwindCSS", "ESLint", "Prettier", "Commitlint", "Husky", "Zustand", "Jest"],
                timeline: "Proyecto de Colaboración",
                description: "Orientado a la gestión de postulaciones o procesos de selección. Permite a los usuarios interactuar con ofertas, enviar solicitudes y administrar información relevante de forma eficiente y accesible.",
                image: "https://picsum.photos/seed/PostulateOk/500/300",
                link: "https://www.postulateok.com/landing",
            },
            {
                name: "HttpLazy",
                role: "Librería personal de npm",
                stack: ["JavaScript", "TypeScript", "NPM"],
                timeline: "v2.5.2",
                description: "Un toolkit de API modular en JS/TS diseñado para la simplicidad y flexibilidad, con autenticación, reintentos, manejo de errores e interceptores integrados.",
                image: "https://picsum.photos/seed/HttpLazy/500/300",
                link: "https://www.npmjs.com/package/httplazy",
            },
            {
                name: "Deal Up!",
                role: "Desarrollador Full Stack (Proyecto Final Henry)",
                stack: ["Next.js", "Redux Toolkit", "Node.js", "SCRUM"],
                timeline: "Ene 2023 – Ago 2023",
                description: "Proyecto final para crear una app que conecta emprendedores e inversores. Usé Redux Toolkit para la gestión de estados complejos y trabajé con la metodología SCRUM para entregar el producto final.",
                image: "https://picsum.photos/seed/DealUp/500/300",
                link: "https://start-bussines-n21ptnn46-adielhdz.vercel.app/",
            },
        ],
        otherProjects: [
            {
                name: "Stellar",
                role: "Generador de Diseño con IA",
                stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Google Gemini 2.5 Flash API"],
                timeline: "Proyecto Personal",
                description: "Una aplicación web moderna que utiliza la IA de Google Gemini para generar paletas de colores y combinaciones de fuentes cohesivas para el diseño web. Creada para diseñadores y desarrolladores que buscan inspiración visual rápida y profesional.",
                image: "https://picsum.photos/seed/Stellar/500/300",
                link: "https://stellar-five-psi.vercel.app/",
            },
            {
                name: "Pokedex",
                role: "Proyecto Frontend",
                stack: ["React", "TypeScript", "Pokemon API"],
                timeline: "Proyecto Personal",
                description: "Pokedex que consume datos de la API de Pokémon. Permite ver todos los Pokémon y sus datos específicos.",
                image: "https://picsum.photos/seed/Pokedex/500/300",
                link: "https://pokedex-typescript-reactmc.netlify.app/",
            },
            {
                name: "Conversor de Divisas",
                role: "Proyecto Frontend",
                stack: ["React", "JavaScript", "API"],
                timeline: "Proyecto Personal",
                description: "Una aplicación web para la conversión de divisas. Permite calcular el tipo de cambio entre dos tipos de monedas.",
                image: "https://picsum.photos/seed/Cotizador/500/300",
                link: "https://cotizadorbymauroociappina.netlify.app/",
            },
            {
                name: "Carrito de Compras",
                role: "Proyecto Frontend",
                stack: ["React", "JavaScript"],
                timeline: "Proyecto Personal",
                description: "Una aplicación web que simula un carrito de compras, permitiendo a los usuarios agregar y quitar productos.",
                image: "https://picsum.photos/seed/ShoppingCart/500/300",
                link: "https://carritodecompraciappina.netlify.app/",
            },
            {
                name: "Festival de Rock",
                role: "Proyecto Frontend",
                stack: ["HTML", "CSS", "JavaScript"],
                timeline: "Proyecto Personal",
                description: "Una aplicación web dedicada a un festival de música. Presenta un cartel, horarios de conciertos y una galería de fotos interactiva.",
                image: "https://picsum.photos/seed/FestivalRock/500/300",
                link: "https://rockfestivalmdp2022.netlify.app/",
            },
            {
                name: "Cafetería",
                role: "Proyecto Frontend",
                stack: ["HTML", "CSS", "JavaScript"],
                timeline: "Proyecto Personal",
                description: "Una aplicación web para una cafetería. Presenta un menú, fotos, una página 'Sobre nosotros', descripciones de productos y un formulario de contacto.",
                image: "https://picsum.photos/seed/CoffeeShop/500/300",
                link: "https://blogcafeciappina.netlify.app/",
            },
            {
                name: "Buscador de Imágenes Pixabay",
                role: "Proyecto Frontend",
                stack: ["HTML", "CSS", "JavaScript", "API"],
                timeline: "Proyecto Personal",
                description: "Una aplicación web que se conecta a la API de Pixabay para permitir a los usuarios buscar y ver imágenes de alta calidad.",
                image: "https://picsum.photos/seed/PixabaySearch/500/300",
                link: "https://api-pixabay-buscador-mauroo-ciappina.netlify.app/",
            },
            {
                name: "Tienda de Fotografía",
                role: "Proyecto Frontend",
                stack: ["HTML", "CSS", "JavaScript"],
                timeline: "Ene 2022",
                description: "Una tienda de fotografía en línea construida con JavaScript, HTML y CSS. La plataforma permite a los usuarios navegar y comprar productos y servicios de fotografía, con un carrito de compras y registro de usuarios.",
                image: "https://picsum.photos/seed/PhotographyStore/500/300",
            }
        ],
        buttons: {
            show_more: "Mostrar Más",
            show_less: "Mostrar Menos",
        },
        achievements: [
            {
                title: "Desarrollo de Personal Automation Bot",
                description: "Desarrollé un bot de Telegram avanzado con IA que integra Gmail, Google Calendar, Google Drive y servicios de IA con sistema RAG personalizado y arquitectura modular en Python para automatización de productividad.",
            },
            {
                title: "HttpLazy Publicado en NPM",
                description: "Publiqué exitosamente 'HttpLazy', una librería de código abierto reconocida por su flexibilidad y diseño modular en el manejo de solicitudes API.",
            },
            {
                title: "Presentación Final de Henry Bootcamp",
                description: "Presenté “Deal Up!” en el Demo Day de Henry Bootcamp, mostrando una aplicación full-stack que combina un frontend moderno con un backend robusto.",
            },
            {
                title: "Asistente al Deep Tech Summit 2025",
                description: "Participé activamente en el Deep Tech Summit, involucrándome en debates sobre IA, biotecnología y el futuro de la tecnología.",
            }
        ],
        testimonials: [
            {
                quote: "Mauro demostró desde el primer día una adaptación rápida al entorno de trabajo, siempre dedicado y con un gran sentido de la responsabilidad, pone toda su predisposición a cada tarea demostrando profesionalismo en cada idea y contribución con el equipo.",
                author: "Jon Nahuel Pereyra",
                title: "Director de Backend en Dazlab"
            },
            {
                quote: "El desarrollo de la plataforma Packar por parte de Mauro fue sobresaliente. Tradujo expertamente nuestra visión de negocio en una aplicación SaaS robusta y de alta calidad, demostrando excepcionales habilidades full-stack. Su compromiso y profesionalismo fueron ejemplares, entregando un producto que superó nuestras expectativas.",
                author: "Antonio Medina Vázquez",
                title: "Fundador y CEO en Packar"
            },
            {
                quote: "Mauro es un programador ingenioso y eficiente que aborda desafíos complejos con creatividad. Su capacidad para encontrar soluciones innovadoras, adaptarse a nuevas tecnologías y escribir código limpio y de alta calidad lo convierte en un activo invaluable. También es un gran colaborador, siempre dispuesto a compartir sus conocimientos y elevar los estándares del equipo.",
                author: "Xavier Montero",
                title: "Desarrollador Backend en Dazlab"
            }
        ],
        education: {
            title: "Educación",
            items: [
                {
                    degree: "Desarrollador Full Stack",
                    institution: "Henry Bootcamp",
                    timeline: "Ene 2023 – Ago 2023"
                },
                {
                    degree: "Comunicación Audiovisual",
                    institution: "Universidad Nacional de Mar del Plata",
                    timeline: "Mar 2018 – Dic 2022"
                }
            ],
        },
        languages: {
            title: "Idiomas",
            items: [
                { name: "Español", level: "Nativo" },
                { name: "Inglés", level: "B1 - Intermedio" }
            ],
        },
        certifications: [
            {
                name: "Lean Six Sigma White Belt",
                issuer: "CertiProf",
                date: "Emitido Oct 2024",
                description: "Introducción a los conceptos clave de mejora de procesos utilizando las metodologías Lean y Six Sigma."
            },
            {
                name: "Programación Backend",
                issuer: "Argentina Programa – TICMAS",
                date: "Emitido May 2023",
                description: "Un curso enfocado en el desarrollo del lado del servidor, cubriendo conceptos clave para construir sistemas backend robustos."
            },
            {
                name: "Introducción a la Programación",
                issuer: "Argentina Programa – TICMAS",
                date: "Emitido Feb 2023",
                description: "Un curso introductorio que cubre los conceptos fundamentales de la lógica de programación y la resolución de problemas."
            },
            {
                name: "Algoritmos y Estructuras de Datos en JavaScript",
                issuer: "freeCodeCamp",
                date: "Emitido Jun 2023 | 300 horas",
                description: "Este curso completo profundiza en algoritmos, estructuras de datos y programación funcional y orientada a objetos en JavaScript."
            },
            {
                name: "Scrum: Fundamentos de la Gestión Ágil de Proyectos",
                issuer: "LinkedIn",
                date: "Emitido Jul 2023",
                credentialId: "AUg5UlGKkoMIKD3W7z5o4Qz2",
                description: "Introduce la metodología ágil Scrum, sus roles, eventos y artefactos para mejorar la gestión de proyectos y la colaboración en equipo."
            },
            {
                name: "Instagram para Emprendedores",
                issuer: "Luzzi Digital",
                date: "Emitido Jul 2021",
                description: "Enseña estrategias para emprendedores que buscan potenciar su marca y ventas a través de Instagram, cubriendo creación de contenido, crecimiento de seguidores y publicidad."
            }
        ],
        contact: {
            title: "Construyamos algo genial.",
            subtitle: "Actualmente estoy abierto a nuevas oportunidades y colaboraciones. ¿Tienes un proyecto en mente o simplemente quieres saludar? Mi bandeja de entrada está siempre abierta.",
        },
        footer: {
            copyright: "Todos los derechos reservados."
        },
        modal: {
            stack: "Tecnologías",
            visit: "Visitar Proyecto"
        }
    }
};
