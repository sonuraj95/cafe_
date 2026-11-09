// ============================================================
// GALLERY DATA — the client edits ONLY this file to update the
// gallery. Replace PLACEHOLDER photos with real cafe pictures.
// ratio hints drive the masonry rhythm: "tall" | "wide" | "sq"
// ============================================================

const img = (id, w = 800) =>
    `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const GALLERY_IMAGES = [
    { src: img("photo-1495474472287-4d71bcdd2085"), alt: "Fresh coffee on a cafe table", caption: "Morning brews", ratio: "tall" },
    { src: img("photo-1521017432531-fbd92d768814"), alt: "Green plant-filled cafe interior", caption: "Our green corners", ratio: "sq" },
    { src: img("photo-1551538827-9c037cb4f32a"), alt: "Colourful mocktails at the counter", caption: "Mocktail hour", ratio: "tall" },
    { src: img("photo-1504674900247-0877df9cc836"), alt: "Cafe food spread on the table", caption: "Made fresh daily", ratio: "wide" },
    { src: img("photo-1559925393-8be0ec4767c8"), alt: "Wooden tables inside the cafe", caption: "Find your spot", ratio: "sq" },
    { src: img("photo-1551024506-0bccd828d307"), alt: "Dessert served at the cafe", caption: "Sweet endings", ratio: "tall" },
    { src: img("photo-1529156069898-49953e39b3ac"), alt: "Friends laughing together", caption: "Good company", ratio: "wide" },
    { src: img("photo-1509042239860-f550ce710b93"), alt: "Latte art close up", caption: "Poured with care", ratio: "sq" },
    { src: img("photo-1492684223066-81342ee5ff30"), alt: "Evening event at the cafe", caption: "Event nights", ratio: "tall" },
    { src: img("photo-1541167760496-1628856ab772"), alt: "Coffee flat lay with beans", caption: "The details", ratio: "sq" },
    { src: img("photo-1517248135467-4c7edcad34c4"), alt: "Aesthetic cafe seating area", caption: "Stay a while", ratio: "wide" },
    { src: img("photo-1493857671505-72967e2e2760"), alt: "Sunlit window seat in the cafe", caption: "Golden hours", ratio: "tall" },
];
