import { motion } from "framer-motion";
import { MessageCircle, Github, Linkedin, Mail } from "lucide-react";
import { CTA_CONTENT, PROFILE } from "../constants";

const CTA = () => {
    return (
        <section className="py-24 px-6 bg-background text-center">
            <div className="max-w-lg mx-auto space-y-10">

                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {CTA_CONTENT.title}
                </h2>

                <motion.a
                    href={PROFILE.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold shadow-[0_0_40px_-10px_rgba(61,159,210,0.5)] overflow-hidden w-full sm:w-auto"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <MessageCircle size={24} className="animate-pulse" />
                    {CTA_CONTENT.buttonText}
                </motion.a>

                <div className="flex justify-center gap-6 text-muted-foreground">
                    <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin /></a>
                    <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github /></a>
                    <a href={`mailto:${PROFILE.email}`} className="hover:text-primary transition-colors"><Mail /></a>
                </div>

                <div className="pt-8 border-t border-border/30 flex flex-col items-center gap-4">
                    <div className="bg-white p-2 rounded-xl w-32 h-32 flex items-center justify-center">
                        {/* Fallback box for QR Code if image missing */}
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://automab.dev%3Fsource=card" alt="QR Code" className="w-full h-full" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                        Scan para salvar
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CTA;
