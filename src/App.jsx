import { useEffect } from "react";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import ServicesCards from "./components/ServicesCards";
import CaseStudy from "./components/CaseStudy";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Smooth scrolling for anchor links
const SmoothScroll = () => {
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a');
            if (!target) return;

            const href = target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);
    return null;
};

function App() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30 selection:text-foreground">
            <SmoothScroll />
            <Hero />
            <Expertise />
            <ServicesCards />
            <CaseStudy />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
