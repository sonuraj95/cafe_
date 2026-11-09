import { MENU_CATEGORIES } from "../data/menuData";

export const FoodCard = ({ item, index = 0 }) => {
    const categoryLabel =
        MENU_CATEGORIES.find((c) => c.id === item.category)?.label || item.category;

    return (
        <article
            className="food-card"
            style={{ animationDelay: `${(index % 8) * 60}ms` }}
            data-testid={`food-card-${item.id}`}
        >
            <div className="food-media">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="food-tag">{categoryLabel}</span>
            </div>
            <div className="food-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="food-foot">
                    <span className="food-price" data-testid={`food-price-${item.id}`}>
                        {item.price || "₹ —"}
                        {!item.price && <small>price updating soon</small>}
                    </span>
                </div>
            </div>
        </article>
    );
};
