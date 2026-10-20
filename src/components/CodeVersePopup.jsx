import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CodeVersePopup.css';

const CodeVersePopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="codeverse-popup-overlay">
                    <motion.div
                        className="codeverse-popup"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        {/* Decorative background elements to blend with Metaversity theme */}
                        <div className="codeverse-popup-glow"></div>
                        <div className="codeverse-popup-orb orb-1"></div>
                        <div className="codeverse-popup-orb orb-2"></div>
                        
                        <button className="codeverse-popup-close" onClick={handleClose} aria-label="Close">
                            ✕
                        </button>

                        <div className="codeverse-popup-content">
                            <motion.div 
                                className="codeverse-popup-badge"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="badge-sparkle">💻</span> HACK THE MATRIX
                            </motion.div>

                            <h2 className="codeverse-popup-title">
                                Register for <span className="text-gradient">CodeVerse 2.0</span>
                            </h2>
                            
                            <p className="codeverse-popup-desc">
                                Dive into the ultimate coding showdown! Turn caffeine into code, squash bugs like a pro, and build ideas that defy logic. The ultimate glory awaits! 🚀
                            </p>

                            <a 
                                href="https://codeverse-2-0-vfgn.onrender.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="codeverse-popup-btn"
                                onClick={() => setIsVisible(false)}
                            >
                                <span>Join the Hackathon</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                <div className="btn-shine"></div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CodeVersePopup;
