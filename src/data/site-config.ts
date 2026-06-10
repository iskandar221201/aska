// import avatar from '../assets/images/avatar.jpg';
// import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://aska.web.id',
    avatar: {
        src: avatar,
        alt: 'Aska Diredja'
    },
    title: 'aska diredja',
    subtitle: 'AI builder. Writing about what works in production.',
    description: 'Solo AI builder running multi-tenant AI on $0/month. Writing about AI cost optimization, production systems, and creative workflows.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'aska diredja - AI builder and writer'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [],
    hero: {
        title: 'I build AI systems that actually run in production.',
        text: "I'm **Aska**, a solo AI builder and developer from West Java, Indonesia.\n\nNot demos. Not prototypes. A multi-tenant WhatsApp AI platform handling real customer conversations — built solo, running on **$0/month** in AI costs through provider rotation and smart architecture.\n\nI write about AI cost optimization, building production systems with limited resources, and the gap between AI hype and what actually works when real users depend on it.",
        image: {
            src: hero,
            alt: 'Aska Diredja'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe to Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
