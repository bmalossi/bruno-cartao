import { useEffect, useRef } from "react";
import { ArrowDown, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { PROFILE } from "../constants";
import perfil3 from "../assets/perfil3.webp";

const Hero = () => {
    const starsRef = useRef(null);
    const planetRef = useRef(null);
    const connectionsCanvasRef = useRef(null);

    useEffect(() => {
        // Scroll Parallax Effect
        const handleScroll = () => {
            const y = window.scrollY || 0;
            const eased = y * 0.14;
            if (starsRef.current) {
                starsRef.current.style.transform = `translateY(${eased}px)`;
            }
            if (planetRef.current) {
                planetRef.current.style.transform = `translate(-50%, ${eased * 0.35}px)`;
            }
            if (connectionsCanvasRef.current) {
                connectionsCanvasRef.current.style.transform = `translateY(${eased * 0.45}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Canvas Animation (Stars & Connections)
        const canvas = connectionsCanvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        const resize = () => {
            const { innerWidth, innerHeight, devicePixelRatio } = window;
            canvas.width = innerWidth * devicePixelRatio;
            canvas.height = innerHeight * devicePixelRatio;
            context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        // Get primary color from CSS var or fallback
        const rootStyles = getComputedStyle(document.documentElement);
        const primaryRaw = rootStyles.getPropertyValue("--primary").trim();
        const primaryBase = primaryRaw || "197 57% 53%";

        const starCount = 60;
        const stars = [];
        const segments = [];

        const initStars = () => {
            stars.length = 0;
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                });
            }
        };

        initStars();

        const randomStar = () => stars[Math.floor(Math.random() * stars.length)];

        let animationFrame;
        const animate = () => {
            const { innerWidth, innerHeight } = window;
            context.clearRect(0, 0, innerWidth, innerHeight);

            // Stars
            context.fillStyle = "rgba(255,255,255,0.55)";
            for (const star of stars) {
                context.beginPath();
                context.arc(star.x, star.y, Math.random() * 0.35 + 0.35, 0, Math.PI * 2);
                context.fill();
            }

            // Connections
            if (segments.length < 10 && Math.random() < 0.02) {
                const a = randomStar();
                const b = randomStar();
                if (a && b && a !== b) {
                    segments.push({ from: a, to: b, progress: 0, life: 1 });
                }
            }

            context.lineWidth = 0.35;
            for (let i = segments.length - 1; i >= 0; i--) {
                const seg = segments[i];
                seg.progress += 0.005;
                seg.life -= 0.004;
                const t = Math.min(seg.progress, 1);
                const x = seg.from.x + (seg.to.x - seg.from.x) * t;
                const y = seg.from.y + (seg.to.y - seg.from.y) * t;

                const alpha = Math.max(seg.life * 0.9, 0.02);
                context.strokeStyle = `hsl(${primaryBase} / ${alpha})`;
                context.beginPath();
                context.moveTo(seg.from.x, seg.from.y);
                context.lineTo(x, y);
                context.stroke();

                if (seg.life <= 0) {
                    segments.splice(i, 1);
                }
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <section className="automab-hero relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            {/* Background Elements */}
            <div ref={starsRef} className="automab-stars-layer absolute inset-0" aria-hidden="true" />
            <canvas
                ref={connectionsCanvasRef}
                className="pointer-events-none absolute inset-0 h-full w-full z-0"
                aria-hidden="true"
            />
            <div ref={planetRef} className="automab-planet z-0" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto space-y-6 pt-10">
                {/* Avatar */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative"
                >
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
                    <img
                        src={perfil3}
                        alt={PROFILE.name}
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary shadow-2xl object-cover relative z-10"
                    />
                </motion.div>

                {/* Text */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2"
                    >
                        {PROFILE.name}
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-primary font-medium tracking-widest uppercase text-sm md:text-base"
                    >
                        {PROFILE.role}
                    </motion.p>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed"
                    >
                        {PROFILE.headline}
                    </motion.p>
                </div>

                {/* Actions */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
                >
                    <a
                        href={PROFILE.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                    >
                        <MessageCircle size={20} />
                        WhatsApp
                    </a>
                    <a
                        href={PROFILE.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-secondary/80 text-secondary-foreground backdrop-blur-sm px-8 py-3 rounded-full font-semibold border border-white/10 hover:bg-secondary transition-colors"
                    >
                        Portfólio
                        <ExternalLink size={18} />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 z-10"
            >
                <span className="text-xs uppercase tracking-widest">Explore</span>
                <ArrowDown className="animate-bounce-hint" />
            </motion.div>
        </section>
    );
};

export default Hero;
