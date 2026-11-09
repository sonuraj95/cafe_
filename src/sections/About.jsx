import { ArrowRight, Check, Coffee } from "lucide-react";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../data/siteData";

const POINTS = ["Aesthetic ambience", "Cafe favourites", "Events & programs", "Made for hangouts"];

export const About = () => {
    return (
        <section className="section" data-testid="about-section">
            <div className="container about-grid">
                <Reveal className="about-media">
                    <img
                        className="main"
                        src={IMAGES.about}
                        alt="The aesthetic green interior of Mocktales Cafe"
                        loading="lazy"
                    />
                    <div className="about-badge">
                        <span className="icon-badge">
                            <Coffee />
                        </span>
                        <div>
                            <strong>The Mocktales Way</strong>
                            <small>Food · Friends · Moments</small>
                        </div>
                    </div>
                </Reveal>

                <Reveal className="about-copy" delay={120}>
                    <span className="eyebrow">The Mocktales Experience</span>
                    <h2 className="section-heading">
                        More Than Just <em>A Cafe</em>
                    </h2>
                    <p className="lead">
                        Mocktales Cafe is a place where great food meets a beautiful
                        atmosphere. Whether you're here for a quick bite, a relaxed
                        hangout with friends or a small celebration, Mocktales is
                        designed to make every visit enjoyable.
                    </p>
                    <ul className="about-points">
                        {POINTS.map((point) => (
                            <li key={point}>
                                <Check aria-hidden="true" /> {point}
                            </li>
                        ))}
                    </ul>
                    <Button to="/about" dataTestId="about-discover-btn">
                        Discover Mocktales <ArrowRight />
                    </Button>
                </Reveal>
            </div>
        </section>
    );
};
