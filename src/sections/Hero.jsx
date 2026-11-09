import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "../components/Button";
import { IMAGES } from "../data/siteData";

export const Hero = () => {
    return (
        <section className="hero" data-testid="hero-section">
            <div className="hero-media" aria-hidden="true">
                <img
                    src={IMAGES.hero}
                    alt=""
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                />
            </div>

            <div className="hero-overlay" aria-hidden="true" />

            <div className="container">
                <div className="hero-content">
                    <span
                        className="hero-label hero-anim"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <i aria-hidden="true" /> Welcome to Mocktales
                    </span>

                    <h1
                        className="hero-anim"
                        style={{ animationDelay: "0.25s" }}
                    >
                        Good Food.
                        <br />
                        Good <em>Vibes.</em>
                        <br />
                        Great Moments.
                    </h1>

                    <p
                        className="hero-sub hero-anim"
                        style={{ animationDelay: "0.4s" }}
                    >
                        Your aesthetic cafe for delicious food, relaxed hangouts
                        and memorable moments.
                    </p>

                    <div
                        className="hero-actions hero-anim"
                        style={{ animationDelay: "0.55s" }}
                    >
                        <Button to="/menu" dataTestId="hero-explore-menu-btn">
                            Explore Menu <ArrowRight />
                        </Button>

                        <Button
                            to="/contact"
                            variant="ghost-white"
                            dataTestId="hero-visit-us-btn"
                        >
                            Visit Us <MapPin />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};