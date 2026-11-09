import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../data/siteData";

export const Vibe = () => {
    return (
        <section className="section section-mint vibe" data-testid="vibe-section">
            <div className="container">
                <SectionTitle
                    eyebrow="The Vibe"
                    title={
                        <>
                            Come For The Food. <em>Stay For The Vibe.</em>
                        </>
                    }
                    subtitle="Green corners, warm light, good music and tables made for long conversations."
                    dataTestId="vibe-title"
                />

                <div className="vibe-layout">
                    <span className="vibe-float">Good food × Good company</span>
                    {IMAGES.vibe.map((item, i) => (
                        <Reveal
                            key={item.src}
                            delay={i * 80}
                            className={`vibe-item ${item.cls}`}
                        >
                            <img src={item.src} alt={item.alt} loading="lazy" />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
