import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Smartphone, ShieldCheck } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import logo from '@/assets/logo.jpeg';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/الخدمات', label: 'خدماتنا' },
  { href: '/من-نحن', label: 'من نحن' },
  { href: '/تواصل', label: 'تواصل معنا' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-[100] transition-all duration-500 ${isScrolled
        ? 'bg-background/80 backdrop-blur-2xl border-b border-border shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-2'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group perspective-1000">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:rotate-y-12 transition-transform duration-500">
              <img
                src={logo}
                alt="متجر الكرادة"
                className="h-12 w-12 object-cover"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-foreground tracking-tighter leading-none mb-1">
                متجر <span className="text-gradient-gold">الكرادة</span>
              </h1>
              <div className="flex items-center gap-1.5 opacity-60">
                <ShieldCheck className="w-3 h-3 text-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">المركز المعتمد &bull; وكيل GIGABYTE</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-secondary/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-sm self-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden group ${location.pathname === link.href
                  ? 'text-navy-dark'
                  : 'text-foreground/70 hover:text-foreground'
                  }`}
              >
                {location.pathname === link.href && (
                  <div className="absolute inset-0 bg-gradient-gold rounded-xl -z-10 shadow-lg" />
                )}
                <span className="relative z-10">{link.label}</span>
                {!(location.pathname === link.href) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-secondary/80 border border-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 group shadow-inner"
              aria-label="تبديل الوضع"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
              ) : (
                <Sun className="w-5 h-5 transform group-hover:rotate-45 transition-transform" />
              )}
            </button>

            {/* Track Button */}
            <Link
              to="/تتبع"
              className="hidden sm:flex items-center gap-2 btn-premium text-xs py-3 px-6 rounded-2xl"
            >
              <Smartphone className="w-4 h-4" />
              <span className="font-black">تتبّع جهازي</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 rounded-xl bg-secondary/80 flex items-center justify-center border border-white/5 transition-colors"
              aria-label="القائمة"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-3 p-6 rounded-[2.5rem] bg-card border border-border shadow-2xl relative">
            {/* Decorative element */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gold/30 rounded-full" />

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl font-black text-lg transition-all ${location.pathname === link.href
                  ? 'bg-gradient-gold text-navy-dark shadow-lg'
                  : 'text-foreground/80 hover:bg-secondary'
                  }`}
              >
                {link.label}
                {location.pathname === link.href && <ShieldCheck className="w-5 h-5" />}
              </Link>
            ))}
            <Link
              to="/تتبع"
              className="btn-premium flex items-center justify-center gap-3 py-5 mt-4 text-lg rounded-2xl"
            >
              <Smartphone className="w-5 h-5" />
              تتبّع تذكرتك
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
