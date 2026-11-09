import { Reveal } from "./Reveal";

export const PageHero = ({ eyebrow, title, subtitle, dataTestId }) => {
    return (
        <section className="page-hero" data-testid={dataTestId}>
            <div className="container">
                <Reveal>
                    <span className="eyebrow centered">{eyebrow}</span>
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                </Reveal>
            </div>
        </section>
    );
};
