import { PageHero } from "../components/PageHero";
import { GallerySection } from "../sections/GallerySection";
import { CTA } from "../sections/CTA";

export default function GalleryPage() {
    return (
        <>
            <PageHero
                eyebrow="Gallery"
                title={
                    <>
                        A Glimpse of <em>Mocktales</em>
                    </>
                }
                subtitle="Food, corners, drinks and celebrations — a little tour before you visit."
                dataTestId="gallery-page-hero"
            />
            <GallerySection />
            <CTA />
        </>
    );
}
