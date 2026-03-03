import { PERSONAL } from "@/data/portfolio";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border-token">
            <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-10 text-sm text-muted md:px-10">
                <p>&copy; {year} {PERSONAL.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}
