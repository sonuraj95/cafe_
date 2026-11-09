import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../data/siteData";

export const CTA = () => {
    return (
        <section className="section cta" data-testid="cta-section">
            <div className="cta-bg" aria-hidden="true">
                <img src={IMAGES.cta} alt="" loading="lazy" />
            </div>
            <div className="cta-overlay" aria-hidden="true" />
            <div className="container">
                <Reveal className="cta-content">
                    <span className="eyebrow centered">Ready When You Are</span>
                    <h2>
                        Your Next Great Moment <em>Starts Here.</em>
                    </h2>
                    <p>
                        Good food, great vibes and a place worth coming back to.
                    </p>
                    <div className="cta-actions">
                        <Button to="/menu" variant="white" dataTestId="cta-explore-menu-btn">
                            Explore Menu <ArrowRight />
                        </Button>
                        <Button to="/contact" variant="ghost-white" dataTestId="cta-visit-btn">
                            Visit Mocktales <MapPin />
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
