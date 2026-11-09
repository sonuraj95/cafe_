import { useEffect, useRef, useState } from "react";

export const Reveal = ({
    children,
    delay = 0,
    className = "",
    as: Tag = "div",
    ...rest
}) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal ${visible ? "visible" : ""} ${className}`.trim()}
            {...rest}
        >
            {children}
        </Tag>
    );
};
