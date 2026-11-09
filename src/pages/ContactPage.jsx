import { PageHero } from "../components/PageHero";
import { VisitUs } from "../sections/VisitUs";
import { CTA } from "../sections/CTA";

export default function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="Contact"
                title={
                    <>
                        Come Say <em>Hello</em>
                    </>
                }
                subtitle="Questions, plans or celebrations — reach out, or just walk in."
                dataTestId="contact-page-hero"
            />
            <VisitUs />
            <CTA />
        </>
    );
}
