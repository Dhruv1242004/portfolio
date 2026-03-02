import { PERSONAL, SOCIAL_LINKS } from "@/data/portfolio";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border-token">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted md:flex-row md:px-10">
                <p>&copy; {year} {PERSONAL.name}. All rights reserved.</p>

                <ul className="flex gap-6">
                    {SOCIAL_LINKS.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={
                                    link.href.startsWith("mailto:")
                                        ? undefined
                                        : "noopener noreferrer"
                                }
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
