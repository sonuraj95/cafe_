// ============================================================
// EVENT DATA — the client edits ONLY this file to update
// events and the highlighted upcoming event.
// ============================================================

const img = (id, w = 900) =>
    `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const EVENTS = [
    {
        id: "birthdays",
        name: "Birthday Celebrations",
        description: "Cakes, candles and your favourite people — celebrate your day in a space made for memories.",
        image: img("photo-1530103862676-de8c9debad1d"),
        alt: "Birthday celebration with balloons",
    },
    {
        id: "gatherings",
        name: "Small Gatherings",
        description: "Cozy corners and good food for get-togethers that deserve a beautiful setting.",
        image: img("photo-1529156069898-49953e39b3ac"),
        alt: "Friends gathering at the cafe",
    },
    {
        id: "college-meetups",
        name: "College Meetups",
        description: "Group projects, club meetings or just catching up after class — we've got the table.",
        image: img("photo-1543269865-cbf427effbad"),
        alt: "College students meeting over coffee",
    },
    {
        id: "special-programs",
        name: "Special Programs",
        description: "Open mics, music evenings and themed nights — something special is always brewing.",
        image: img("photo-1492684223066-81342ee5ff30"),
        alt: "Evening program with lights and sparklers",
    },
    {
        id: "community-events",
        name: "Community Events",
        description: "A welcoming venue for local communities to connect, share and celebrate together.",
        image: img("photo-1511632765486-a01980e01a18"),
        alt: "Community event with people together",
    },
    {
        id: "private-moments",
        name: "Private Moments",
        description: "Intimate celebrations and quiet milestones, hosted with warmth and care.",
        image: img("photo-1414235077428-338989a2e8c0"),
        alt: "Elegant private dining setup",
    },
];

// PLACEHOLDER — update with a real upcoming event when announced.
export const UPCOMING_EVENT = {
    title: "Something Special Is Brewing",
    description:
        "New events, programs and themed evenings at Mocktales are announced on our Instagram first. Follow us so you never miss a moment.",
};
