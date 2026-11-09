import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { CONTACT } from "../data/siteData";

export const VisitUs = () => {
    return (
        <section className="section section-tint" data-testid="visit-us-section">
            <div className="container">
                <SectionTitle
                    eyebrow="Find Us"
                    title={
                        <>
                            Come Visit <em>Mocktales</em>
                        </>
                    }
                    subtitle="Drop by for a coffee, stay for the evening — we're easy to find."
                    dataTestId="visit-us-title"
                />

                <div className="visit-grid">
                    <Reveal>
                        <ul className="visit-info-list">
                            <li>
                                <span className="icon-badge">
                                    <MapPin />
                                </span>
                                <div>
                                    <strong>Location</strong>
                                    <p>
                                        {CONTACT.addressTitle}
                                        <br />
                                        {CONTACT.addressLines.join(", ")}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span className="icon-badge">
                                    <Phone />
                                </span>
                                <div>
                                    <strong>Phone</strong>
                                    <p>{CONTACT.phoneDisplay}</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon-badge">
                                    <Clock />
                                </span>
                                <div>
                                    <strong>Opening Hours</strong>
                                    <p>{CONTACT.hoursDisplay}</p>
                                </div>
                            </li>
                        </ul>

                        <div className="visit-actions">
                            <Button
                                href={CONTACT.directionsHref}
                                external
                                dataTestId="get-directions-btn"
                            >
                                <Navigation /> Get Directions
                            </Button>
                            <Button href={CONTACT.phoneHref} variant="outline" dataTestId="call-now-btn">
                                <Phone /> Call Now
                            </Button>
                            <Button
                                href={CONTACT.whatsappHref}
                                external
                                variant="outline"
                                dataTestId="whatsapp-btn"
                            >
                                <MessageCircle /> WhatsApp Us
                            </Button>
                        </div>
                    </Reveal>

                    <Reveal delay={140}>
                        <div className="visit-map" data-testid="visit-map">
                            <iframe
                                title="Mocktales Cafe location map — Near SP College, Dumka"
                                src={CONTACT.mapsEmbed}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
