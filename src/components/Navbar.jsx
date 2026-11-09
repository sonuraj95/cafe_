import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "../data/siteData";
import { Button } from "./Button";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header className={`navbar ${scrolled ? "scrolled" : ""}`} data-testid="navbar">
                <nav className="container navbar-inner" aria-label="Main navigation">
                    <Link to="/" className="brand" data-testid="navbar-brand">
                        <span className="brand-mark">M</span>
                        <span className="brand-name">
                            Mocktales
                            <span>Cafe</span>
                        </span>
                    </Link>

                    <ul className="nav-links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => (isActive ? "active" : "")}
                                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                                    end={link.path === "/"}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <Button to="/contact" className="nav-cta" dataTestId="nav-visit-us-btn">
                            Visit Us <ArrowUpRight />
                        </Button>
                        <button
                            className="nav-toggle"
                            onClick={() => setOpen((v) => !v)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            data-testid="nav-hamburger-btn"
                        >
                            {open ? <X /> : <Menu />}
                        </button>
                    </div>
                </nav>
            </header>

            <div className={`mobile-menu ${open ? "open" : ""}`} data-testid="mobile-menu">
                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `mobile-link ${isActive ? "active" : ""}`
                                }
                                end={link.path === "/"}
                                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                            >
                                {link.label} <ArrowUpRight size={18} />
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Button to="/contact" dataTestId="mobile-visit-us-btn">
                    Visit Us <ArrowUpRight />
                </Button>
            </div>
        </>
    );
};
