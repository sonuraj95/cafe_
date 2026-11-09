import { Link } from "react-router-dom";

export const Button = ({
    children,
    variant = "primary",
    to,
    href,
    onClick,
    type = "button",
    className = "",
    dataTestId,
    external = false,
}) => {
    const cls = `btn btn-${variant} ${className}`.trim();

    if (to) {
        return (
            <Link to={to} className={cls} data-testid={dataTestId}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                className={cls}
                data-testid={dataTestId}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={cls} data-testid={dataTestId}>
            {children}
        </button>
    );
};
