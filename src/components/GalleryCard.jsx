const RATIO_STYLE = {
    tall: { aspectRatio: "3 / 3.8" },
    wide: { aspectRatio: "3 / 2.1" },
    sq: { aspectRatio: "1 / 1" },
};

export const GalleryCard = ({ item, index }) => {
    return (
        <figure
            className="masonry-item"
            data-testid={`gallery-item-${index}`}
            style={{ margin: 0 }}
        >
            <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                    width: "100%",
                    objectFit: "cover",
                    ...(RATIO_STYLE[item.ratio] || RATIO_STYLE.sq),
                }}
            />
            <figcaption className="gallery-overlay">{item.caption}</figcaption>
        </figure>
    );
};
