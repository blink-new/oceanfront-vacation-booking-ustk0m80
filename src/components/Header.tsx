import { useState } from 'react';
import { Menu, X, User, Globe } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white text-shadow">
              Oceanic Stays
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#stays" className="text-white/90 hover:text-white smooth-transition">
              Stays
            </a>
            <a href="#experiences" className="text-white/90 hover:text-white smooth-transition">
              Experiences
            </a>
            <a href="#host" className="text-white/90 hover:text-white smooth-transition">
              Become a Host
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <Globe className="w-4 h-4 mr-2" />
              EN
            </Button>
            <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#stays" className="text-white/90 hover:text-white smooth-transition">
                Stays
              </a>
              <a href="#experiences" className="text-white/90 hover:text-white smooth-transition">
                Experiences
              </a>
              <a href="#host" className="text-white/90 hover:text-white smooth-transition">
                Become a Host
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <Button variant="ghost" size="sm" className="text-white justify-start">
                  <Globe className="w-4 h-4 mr-2" />
                  English
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white/30 justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}