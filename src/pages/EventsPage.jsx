import { PageHero } from "../components/PageHero";
import { EventsSection } from "../sections/EventsSection";
import { CTA } from "../sections/CTA";

export default function EventsPage() {
    return (
        <>
            <PageHero
                eyebrow="Events & Programs"
                title={
                    <>
                        Moments Worth <em>Celebrating</em>
                    </>
                }
                subtitle="Birthdays, meetups, programs and everything in between — Mocktales hosts it beautifully."
                dataTestId="events-page-hero"
            />
            <EventsSection />
            <CTA />
        </>
    );
}
