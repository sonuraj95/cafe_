import { MapPin, Phone, Clock, Camera } from "lucide-react";
import { Link } from "react-router-dom";

import { NAV_LINKS, CONTACT } from "../data/siteData";

export const Footer = () => {
    return (
        <footer className="footer" data-testid="footer">
            <div className="container">

                <div className="footer-top">

                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="brand"
                            data-testid="footer-brand"
                        >
                            <span className="brand-mark">M</span>

                            <span className="brand-name">
                                Mocktales
                                <span>Cafe</span>
                            </span>
                        </Link>

                        <p className="footer-about">
                            Food, vibes and memorable moments.
                        </p>

                        <div
                            className="social-row"
                            style={{ marginTop: 26 }}
                        >
                            <a
                                href="https://instagram.com/mocktales_cafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Mocktales Cafe Instagram"
                            >
                                    <Camera size={20} />
                            </a>

                            <a
                                href="https://facebook.com/mocktalescafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Mocktales Cafe Facebook"
                            >
                                    <Camera size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Footer navigation">
                        <h4>Explore</h4>

                        <ul>
                            {NAV_LINKS.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact */}
                    <div>
                        <h4>Visit Us</h4>

                        <ul className="footer-contact">

                            <li>
                                <MapPin size={20} />

                                <span>
                                    {CONTACT.addressTitle}
                                    <br />

                                    {CONTACT.addressLines.map((line) => (
                                        <span key={line}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </span>
                            </li>

                            <li>
                                <Phone size={20} />

                                <span>
                                    {CONTACT.phoneDisplay}
                                </span>
                            </li>

                            <li>
                                <Clock size={20} />

                                <span>
                                    {CONTACT.hoursDisplay}
                                </span>
                            </li>

                        </ul>
                    </div>

                    {/* Instagram */}
                    <div>
                        <h4>Follow Along</h4>

                        <ul>
                            <li>
                                <a
                                    href="https://instagram.com/mocktales_cafe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @mocktales_cafe
                                </a>
                            </li>

                            <li>
                                Daily specials, event nights and
                                behind-the-scenes moments.
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">

                    <span>
                        © 2026 Mocktales Cafe. All Rights Reserved.
                    </span>

                    <span>
                        Food · Vibes · Great Moments
                    </span>

                </div>

            </div>
        </footer>
    );
};

