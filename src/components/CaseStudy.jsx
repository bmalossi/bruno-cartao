import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { CASE_STUDY } from "../constants";

const Counter = ({ value, label }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2500 });
    const displayValue = useTransform(springValue, (current) => Math.round(current));

    // Handling "50.000+" vs pure numbers is tricky with simple spring.
    // For simplicity if it's a string with +, we just parse the number part for animation or just fade in.
    // But strictly, let's try to animate the number part if possible.

    const isNumber = typeof value === 'number';
    const numberPart = isNumber ? value : parseInt(value.toString().replace(/\D/g, '')) || 0;
    const suffix = isNumber ? '' : value.toString().replace(/[\d\.]/g, '');

    useEffect(() => {
        if (inView) {
            motionValue.set(numberPart);
        }
    }, [inView, numberPart, motionValue]);

    return (
        <div ref={ref} className="text-center p-4 bg-card rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-foreground mb-1 tabular-nums">
                {isNumber ? (
                    <motion.span>{displayValue}</motion.span>
                ) : (
                    // If mixed string, just show static or partial animation. 
                    // Simplification: just show static textual fade in for complex strings like "50.000+" to avoid glitchy counters
                    <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
                        {value}
                    </motion.span>
                )}
                {isNumber && suffix}
                {label === "Redução de horas" && "%"}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{label}</p>
        </div>
    );
};

const ProgressBar = ({ from, to }) => {
    return (
        <div className="p-4 bg-card rounded-xl border border-border/50 col-span-2">
            <div className="flex justify-between text-sm mb-2 text-muted-foreground uppercase tracking-wider">
                <span>Adimplência</span>
                <span className="text-primary font-bold">{from} → {to}</span>
            </div>
            <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-primary rounded-full relative"
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
            </div>
        </div>
    )
}

const CaseStudy = () => {
    return (
        <section className="py-20 px-6 bg-[hsl(var(--automab-section-alt-bg))] border-y border-border/30">
            <div className="max-w-2xl mx-auto space-y-10">

                <div className="text-center space-y-2">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                        RESULTADO REAL
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {CASE_STUDY.client}
                    </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Dynamic mapping based on constants */}
                    {(() => {
                        const consorciados = CASE_STUDY.stats.find(s => s.label === "Consorciados");
                        const reducao = CASE_STUDY.stats.find(s => s.label === "Redução de horas");
                        const adimplencia = CASE_STUDY.stats.find(s => s.label === "Adimplência");

                        const [fromVal, toVal] = adimplencia ? adimplencia.value.split(" → ") : ["0%", "0%"];

                        return (
                            <>
                                <Counter value={consorciados?.value || ""} label={consorciados?.label || "Consorciados"} />
                                <Counter value={reducao?.value || 0} label={reducao?.label || "Redução de horas"} />
                                <ProgressBar from={fromVal} to={toVal} />
                            </>
                        );
                    })()}
                </div>

                <div className="bg-background/40 rounded-xl p-6 border border-border/50 space-y-4 backdrop-blur-sm">
                    <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Stack</h4>
                        <p className="text-sm font-medium text-foreground">{CASE_STUDY.stack}</p>
                    </div>
                    <div className="h-px w-full bg-border/50" />
                    <div>
                        <h4 className="text-xs font-semibold text-primary uppercase mb-2">Impacto</h4>
                        <p className="text-base font-bold text-foreground">{CASE_STUDY.impact}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CaseStudy;
