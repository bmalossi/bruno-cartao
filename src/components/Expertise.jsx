import { motion } from "framer-motion";
import { EXPERTISE } from "../constants";

const Expertise = () => {
    return (
        <section className="py-20 px-6 bg-[hsl(var(--automab-section-bg))] border-t border-border/30">
            <div className="max-w-2xl mx-auto space-y-12">

                {/* About Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">
                        {EXPERTISE.title}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p className="text-lg text-foreground font-medium">
                            {EXPERTISE.description}
                        </p>
                        <p>{EXPERTISE.specialties}</p>
                        <p className="p-4 bg-background/50 rounded-xl border border-border/50 text-foreground/90 font-medium">
                            {EXPERTISE.proof}
                        </p>
                    </div>
                </motion.div>

                {/* Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Stack Técnico
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {EXPERTISE.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm font-medium text-secondary-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default hover:scale-105 hover:shadow-[0_0_15px_rgba(61,159,210,0.15)]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Expertise;
