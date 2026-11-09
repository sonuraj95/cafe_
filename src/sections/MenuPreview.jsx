import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { FoodCard } from "../components/FoodCard";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";

const PREVIEW_COUNT = 8;

export const MenuPreview = () => {
    const [active, setActive] = useState("all");

    const items = (
        active === "all"
            ? MENU_ITEMS.slice(0, PREVIEW_COUNT)
            : MENU_ITEMS.filter((i) => i.category === active)
    ).slice(0, PREVIEW_COUNT);

    return (
        <section className="section" data-testid="menu-preview-section">
            <div className="container">
                <SectionTitle
                    eyebrow="Our Menu"
                    title={
                        <>
                            Something Delicious <em>Awaits</em>
                        </>
                    }
                    subtitle="Good vibes deserve good food."
                    dataTestId="menu-preview-title"
                />

                <Reveal>
                    <div
                        className="menu-tabs"
                        role="tablist"
                        aria-label="Menu categories"
                        data-testid="menu-tabs"
                    >
                        {MENU_CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                role="tab"
                                aria-selected={active === cat.id}
                                className={`menu-tab ${active === cat.id ? "active" : ""}`}
                                onClick={() => setActive(cat.id)}
                                data-testid={`menu-tab-${cat.id}`}
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

                <Reveal className="menu-more">
                    <Button to="/menu" dataTestId="view-full-menu-btn">
                        View Full Menu <ArrowRight />
                    </Button>
                </Reveal>
            </div>
        </section>
    );
};
