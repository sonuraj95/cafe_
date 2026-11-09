import { SectionTitle } from "../components/SectionTitle";
import { ReviewCard } from "../components/ReviewCard";
import { Reveal } from "../components/Reveal";
import { REVIEWS } from "../data/reviewData";

export const Testimonials = () => {
    return (
        <section className="section" data-testid="testimonials-section">
            <div className="container">
                <SectionTitle
                    eyebrow="Testimonials"
                    title={
                        <>
                            What People <em>Say</em>
                        </>
                    }
                    subtitle="Kind words from the people who make Mocktales what it is."
                    dataTestId="testimonials-title"
                />
                <div className="reviews-grid">
                    {REVIEWS.map((review, i) => (
                        <Reveal key={review.id} delay={i * 90}>
                            <ReviewCard review={review} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
