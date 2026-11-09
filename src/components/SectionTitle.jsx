import { Reveal } from "./Reveal";

export const SectionTitle = ({
    eyebrow,
    title,
    subtitle,
    centered = true,
    dataTestId,
}) => {
    return (
        <Reveal
            className={`section-head ${centered ? "centered" : ""}`}
            data-testid={dataTestId}
        >
            {eyebrow && (
                <span className={`eyebrow ${centered ? "centered" : ""}`}>
                    {eyebrow}
                </span>
            )}
            <h2 className="section-heading">{title}</h2>
            {subtitle && <p className="section-sub">{subtitle}</p>}
        </Reveal>
    );
};
