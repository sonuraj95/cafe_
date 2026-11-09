
// ============================================================
// SITE DATA
// ============================================================

export const SITE = {
    name: "Mocktales Cafe",
    tagline: "Food, vibes and memorable moments.",
};

export const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Events", path: "/events" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
];

export const CONTACT = {
    addressTitle: "Mocktales Cafe",

    addressLines: [
        "Near SP College, Dumka",
        "Jharkhand",
    ],

    phoneDisplay: "+91 XXXXX XXXXX",

    phoneHref: "tel:+91XXXXXXXXXX",

    whatsappHref: "https://wa.me/91XXXXXXXXXX",

    hoursDisplay: "Open Daily · Timings updating soon",

    mapsQuery: "Mocktales Cafe Near SP College Dumka Jharkhand",

    mapsEmbed:
        "https://www.google.com/maps?q=SP+College+Dumka+Jharkhand&output=embed",

    directionsHref:
        "https://www.google.com/maps/search/?api=1&query=Mocktales+Cafe+Near+SP+College+Dumka",

    instagram:
        "https://instagram.com/mocktales_cafe",

    instagramHandle:
        "@mocktales_cafe",

    facebook:
        "https://facebook.com/mocktalescafe",
};

const img = (id, w = 1200) =>
    `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
    hero:"/images/hero/mocktales_cafe.jpg",

    about: "/images/hero/aboutFav.jpg",

    cta: img("photo-1445116572660-236099ec97a0", 1800),

    vibe: [
        {
            src: img("photo-1559925393-8be0ec4767c8", 1000),
            alt: "Warm wooden interior of Mocktales Cafe",
            cls: "vibe-a",
        },
        {
            src: img("photo-1509042239860-f550ce710b93", 800),
            alt: "Latte art being poured at the cafe",
            cls: "vibe-b",
        },
        {
            src: img("photo-1493857671505-72967e2e2760", 800),
            alt: "Cozy cafe window seating",
            cls: "vibe-c",
        },
        {
            src: img("photo-1529156069898-49953e39b3ac", 800),
            alt: "Friends hanging out together at the cafe",
            cls: "vibe-d",
        },
        {
            src: img("photo-1504674900247-0877df9cc836", 800),
            alt: "Beautifully plated cafe food spread",
            cls: "vibe-e",
        },
        {
            src: img("photo-1445116572660-236099ec97a0", 1000),
            alt: "The Mocktales cafe counter",
            cls: "vibe-f",
        },
    ],
};

