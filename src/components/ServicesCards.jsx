import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "../constants";
import { Wrench, Bot, BarChart3, ChevronRight, X, MessageCircle, BookOpen } from "lucide-react";

const icons = {
    automation: Wrench,
    chatbots: Bot,
    reports: BarChart3,
    "content-marketing": BookOpen
};

const ServicesCards = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section className="py-20 px-6 bg-background relative overflow-hidden" id="solutions">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.32em] text-primary mb-2">
                        O QUE EU FAÇO
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Clique para ver detalhes
                    </p>
                </div>

                <div className="grid gap-4">
                    {SERVICES.map((service) => {
                        const Icon = icons[service.id];
                        return (
                            <motion.div
                                key={service.id}
                                layoutId={`card-${service.id}`}
                                onClick={() => setSelectedId(service.id)}
                                className="group relative bg-card border border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground text-lg">{service.shortTitle}</h3>
                                        </div>
                                    </div>
                                    <span className="text-xs text-primary font-medium transition-opacity flex items-center gap-1">
                                        Explorar <ChevronRight size={14} />
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />
                        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 p-4">
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="bg-card border border-border rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
                            >
                                {(() => {
                                    const service = SERVICES.find(s => s.id === selectedId);
                                    const Icon = icons[service.id];
                                    return (
                                        <>
                                            <div className="relative p-6 md:p-8 flex-1 overflow-y-auto">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    <X size={20} />
                                                </button>

                                                <div className="mb-6">
                                                    <motion.div
                                                        className="inline-block p-4 rounded-xl bg-primary/10 text-primary mb-4"
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 0.8, ease: "backOut" }}
                                                    >
                                                        <Icon size={32} />
                                                    </motion.div>
                                                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                                                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                                                </div>

                                                <div className="space-y-4 mb-8">
                                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Benefícios</h4>
                                                    <ul className="space-y-2">
                                                        {service.benefits.map((benefit, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                                                                <span className="text-primary mt-1">•</span>
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {service.stack.map(tech => (
                                                            <span key={tech} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-white/5">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 border-t border-border bg-muted/20">
                                                <a
                                                    href={`https://wa.me/5511944477528?text=Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(service.title)}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-primary/25 transition-all active:scale-95"
                                                >
                                                    <MessageCircle size={18} />
                                                    {service.cta}
                                                </a>
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ServicesCards;
