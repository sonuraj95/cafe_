import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Highlights } from "../sections/Highlights";
import { MenuPreview } from "../sections/MenuPreview";
import { Vibe } from "../sections/Vibe";
import { EventsSection } from "../sections/EventsSection";
import { GallerySection } from "../sections/GallerySection";
import { Testimonials } from "../sections/Testimonials";
import { VisitUs } from "../sections/VisitUs";
import { CTA } from "../sections/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Highlights />
            <MenuPreview />
            <Vibe />
            <EventsSection preview />
            <GallerySection preview />
            <Testimonials />
            <VisitUs />
            <CTA />
        </>
    );
}
