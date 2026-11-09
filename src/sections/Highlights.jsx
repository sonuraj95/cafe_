import { Sparkles, UtensilsCrossed, PartyPopper, MapPin } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";

const HIGHLIGHTS = [
    {
        id: "ambience",
        icon: Sparkles,
        title: "Aesthetic Ambience",
        text: "A beautiful and comfortable atmosphere made for relaxing, meeting friends and capturing moments.",
    },
    {
        id: "food",
        icon: UtensilsCrossed,
        title: "Delicious Fast Food",
        text: "A menu filled with tasty fast-food and cafe favourites, made fresh for every table.",
    },
    {
        id: "events",
        icon: PartyPopper,
        title: "Events & Programs",
        text: "A welcoming space for small events, programs and celebrations of every kind.",
    },
    {
        id: "location",
        icon: MapPin,
        title: "Great Location",
        text: "Conveniently located near SP College, Dumka — easy to reach, hard to leave.",
    },
];

export const Highlights = () => {
    return (
        <section className="section section-tint" data-testid="highlights-section">
            <div className="container">
                <SectionTitle
                    eyebrow="Why Mocktales?"
                    title={
                        <>
                            Made For Good <em>Moments</em>
                        </>
                    }
                    subtitle="Everything at Mocktales is designed around one simple idea — food tastes better when the vibe is right."
                    dataTestId="highlights-title"
                />
                <div className="highlights-grid">
                    {HIGHLIGHTS.map((item, i) => (
                        <Reveal key={item.id} delay={i * 90}>
                            <article className="highlight-card" data-testid={`highlight-card-${item.id}`}>
                                <span className="icon-badge">
                                    <item.icon />
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
