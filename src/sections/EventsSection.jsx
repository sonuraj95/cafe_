import { CalendarHeart, ArrowRight } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { EventCard } from "../components/EventCard";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { EVENTS, UPCOMING_EVENT } from "../data/eventData";

export const EventsSection = ({ preview = false }) => {
    const events = preview ? EVENTS.slice(0, 3) : EVENTS;

    return (
        <section className="section" data-testid="events-section">
            <div className="container">
                <SectionTitle
                    eyebrow="Events & Programs"
                    title={
                        <>
                            Make It <em>A Moment</em>
                        </>
                    }
                    subtitle="From casual meetups to special occasions, make your moments memorable at Mocktales."
                    dataTestId="events-title"
                />

                <div className="events-grid">
                    {events.map((event, i) => (
                        <Reveal key={event.id} delay={(i % 3) * 90}>
                            <EventCard event={event} />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={140}>
                    <div className="upcoming-card" data-testid="upcoming-event-card">
                        <span className="icon-badge">
                            <CalendarHeart />
                        </span>
                        <div>
                            <h3>{UPCOMING_EVENT.title}</h3>
                            <p>{UPCOMING_EVENT.description}</p>
                        </div>
                        <Button
                            href="https://instagram.com/mocktales_cafe"
                            external
                            variant="outline"
                            dataTestId="upcoming-follow-btn"
                        >
                            Follow For Updates <ArrowRight />
                        </Button>
                    </div>
                </Reveal>

                {preview && (
                    <Reveal className="menu-more">
                        <Button to="/events" variant="outline" dataTestId="view-all-events-btn">
                            Explore Events <ArrowRight />
                        </Button>
                    </Reveal>
                )}
            </div>
        </section>
    );
};
