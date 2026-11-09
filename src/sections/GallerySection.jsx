
import { Camera } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { GalleryCard } from "../components/GalleryCard";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { GALLERY_IMAGES } from "../data/galleryData";
import { CONTACT } from "../data/siteData";

export const GallerySection = ({ preview = false }) => {
    const images = preview
        ? GALLERY_IMAGES.slice(0, 8)
        : GALLERY_IMAGES;

    return (
        <section
            className="section section-tint"
            data-testid="gallery-section"
        >
            <div className="container">

                <SectionTitle
                    eyebrow="Gallery"
                    title={
                        <>
                            A Glimpse of <em>Mocktales</em>
                        </>
                    }
                    subtitle="Little moments from our tables, corners and celebrations."
                    dataTestId="gallery-title"
                />

                <Reveal>
                    <div
                        className="masonry"
                        data-testid="gallery-masonry"
                    >
                        {images.map((item, i) => (
                            <GalleryCard
                                key={item.src}
                                item={item}
                                index={i}
                            />
                        ))}
                    </div>
                </Reveal>

                <Reveal className="gallery-cta">
                    <Button
                        href={CONTACT.instagram}
                        external
                        variant="outline"
                        dataTestId="gallery-instagram-btn"
                    >
                        <Camera />
                        Follow {CONTACT.instagramHandle}
                    </Button>
                </Reveal>

            </div>
        </section>
    );
};

