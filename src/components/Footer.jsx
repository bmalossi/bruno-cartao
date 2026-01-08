import { Download } from "lucide-react";
import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
    return (
        <footer className="py-8 px-6 border-t border-border/30 bg-background/50 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">

                <a
                    href={FOOTER_CONTENT.resumeLink}
                    download
                    className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium group"
                >
                    <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                    {FOOTER_CONTENT.resumeButton}
                </a>

                <p className="text-xs text-muted-foreground/60">
                    {FOOTER_CONTENT.text}
                </p>

            </div>
        </footer>
    );
};

export default Footer;
