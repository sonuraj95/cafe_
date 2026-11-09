import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const EventCard = ({ event }) => {
    return (
        <article className="event-card" data-testid={`event-card-${event.id}`}>
            <div className="event-media">
                <img src={event.image} alt={event.alt} loading="lazy" />
            </div>
            <div className="event-body">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <Link
                    to="/contact"
                    className="event-link"
                    data-testid={`event-plan-btn-${event.id}`}
                >
                    Plan With Us <ArrowRight />
                </Link>
            </div>
        </article>
    );
};
