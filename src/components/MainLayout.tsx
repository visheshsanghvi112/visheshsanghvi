
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface MainLayoutProps {
    children: React.ReactNode;
    showFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, showFooter = true }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    // Scroll logic for "back to top" button and active section highlighting
    useEffect(() => {
        const handleScroll = () => {
            // Show/hide scroll to top button
            if (window.scrollY > window.innerHeight) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }

            // Update active section logic (simplified reuse from Index.tsx)
            const sections = ['hero', 'experience', 'education', 'github-activity', 'certifications', 'testimonials', 'contact'];
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative flex flex-col">
            <NavBar activeSection={activeSection} />

            {/* 
        Adjusted top padding to match the NavBar height (roughly 64px - 80px).
        Specific pages can add more padding if they want (like pt-10).
      */}
            <main className="flex-grow pt-16 md:pt-20">
                {children}
            </main>

            {showFooter && (
                <Footer
                    showScrollTop={showScrollTop}
                    onScrollTop={scrollToTop}
                />
            )}
        </div>
    );
};

export default MainLayout;
