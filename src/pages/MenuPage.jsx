import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { FoodCard } from "../components/FoodCard";
import { Reveal } from "../components/Reveal";
import { CTA } from "../sections/CTA";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";

export default function MenuPage() {
    const [active, setActive] = useState("all");

    const items =
        active === "all"
            ? MENU_ITEMS
            : MENU_ITEMS.filter((i) => i.category === active);

    return (
        <>
            <PageHero
                eyebrow="Our Menu"
                title={
                    <>
                        Made Fresh. <em>Served With Vibe.</em>
                    </>
                }
                subtitle="Fast food, cafe favourites, refreshing drinks and sweet endings — pick your craving."
                dataTestId="menu-page-hero"
            />

            <section className="section" data-testid="menu-page-list">
                <div className="container">
                    <Reveal>
                        <div
                            className="menu-tabs"
                            role="tablist"
                            aria-label="Menu categories"
                            data-testid="menu-page-tabs"
                        >
                            {MENU_CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    role="tab"
                                    aria-selected={active === cat.id}
                                    className={`menu-tab ${active === cat.id ? "active" : ""}`}
                                    onClick={() => setActive(cat.id)}
                                    data-testid={`menu-page-tab-${cat.id}`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </Reveal>

                    <div className="menu-grid">
                        {items.map((item, i) => (
                            <FoodCard key={item.id} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
