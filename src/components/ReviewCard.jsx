import { Star } from "lucide-react";

export const ReviewCard = ({ review }) => {
    const initial = review.name.charAt(0);

    return (
        <article className="review-card" data-testid={`review-card-${review.id}`}>
            <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} aria-hidden="true" />
                ))}
            </div>
            <blockquote>“{review.text}”</blockquote>
            <div className="review-author">
                <span className="review-avatar" aria-hidden="true">
                    {initial}
                </span>
                <div>
                    <strong>{review.name}</strong>
                    <small>{review.role}</small>
                </div>
            </div>
        </article>
    );
};
