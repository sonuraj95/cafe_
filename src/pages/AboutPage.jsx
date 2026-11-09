import { PageHero } from "../components/PageHero";
import { About } from "../sections/About";
import { Vibe } from "../sections/Vibe";
import { Highlights } from "../sections/Highlights";
import { Testimonials } from "../sections/Testimonials";
import { CTA } from "../sections/CTA";

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="Our Story"
                title={
                    <>
                        About <em>Mocktales</em>
                    </>
                }
                subtitle="A cafe built around food, friends and the kind of moments you want to come back to."
                dataTestId="about-page-hero"
            />
            <About />
            <Highlights />
            <Vibe />
            <Testimonials />
            <CTA />
        </>
    );
}
