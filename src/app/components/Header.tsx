import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Accueil', anchor: '#home' },
  { label: 'Profil', anchor: '#profil' },
  { label: 'Compétences', anchor: '#competences' },
  { label: 'Projets', anchor: '#projets' },
  { label: 'Parcours', anchor: '#parcours' },
  { label: 'Formations', anchor: '#formation' },
  { label: 'Contact', anchor: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.anchor);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop;
          const offsetHeight = (element as HTMLElement).offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[#050607]/72 backdrop-blur-md border-b border-[rgba(245,247,250,0.10)]">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 h-16 md:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-[#F5F7FA] font-extrabold tracking-[0.12em] text-sm md:text-base">
            PORTFOLIO
          </span>
          <div 
            className="w-2 h-2 rounded-full bg-[#39FF14]" 
            style={{ boxShadow: '0 0 10px rgba(57, 255, 20, 0.6)' }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.anchor}
              onClick={() => handleNavClick(item.anchor)}
              className={`text-sm font-medium transition-all duration-200 relative
                ${activeSection === item.anchor 
                  ? 'text-[#39FF14]' 
                  : 'text-[rgba(245,247,250,0.78)] hover:text-[#F5F7FA]'
                }`}
              style={activeSection === item.anchor ? { textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' } : {}}
            >
              {item.label}
              {activeSection === item.anchor && (
                <span 
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#39FF14]"
                  style={{ boxShadow: '0 0 8px rgba(57, 255, 20, 0.5)' }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#F5F7FA] p-2 hover:text-[#39FF14] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 md:top-[72px] right-0 bottom-0 w-[280px] bg-[#0B0E10] border-l border-[rgba(245,247,250,0.10)] z-[100] lg:hidden overflow-y-auto">
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.anchor}
                  onClick={() => handleNavClick(item.anchor)}
                  className={`text-left py-3 px-4 rounded-lg font-medium transition-all duration-200
                    ${activeSection === item.anchor
                      ? 'text-[#39FF14] bg-[rgba(57,255,20,0.10)]'
                      : 'text-[rgba(245,247,250,0.78)] hover:text-[#F5F7FA] hover:bg-[rgba(245,247,250,0.06)]'
                    }`}
                  style={activeSection === item.anchor ? { boxShadow: '0 0 20px rgba(57, 255, 20, 0.15)' } : {}}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}