import React, { useState } from 'react';
import { Menu, X, Triangle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#/about' },
    { 
      name: 'Services', 
      href: '#', 
      hasDropdown: true, 
      dropdownItems: [
        { 
          name: 'Landscaping', 
          href: '#/services/landscaping',
          hasSubDropdown: true,
          subDropdownItems: [
            { name: 'Areas', isHeader: true },
            { name: 'Jackton', href: '#/areas/jackton-landscaping' },
            { name: 'Bothwell', href: '#/areas/bothwell-landscaping' },
            { name: 'Hamilton', href: '#/areas/hamilton-landscaping' },
            { name: 'Newton Farm', href: '#/areas/newton-farm-landscaping' },
          ]
        },
        { 
          name: 'Hardscaping', 
          href: '#/services/hardscaping',
          hasSubDropdown: true,
          subDropdownItems: [
            { name: 'Areas', isHeader: true },
            { name: 'Jackton', href: '#/areas/jackton-driveways' },
            { name: 'Bothwell', href: '#/areas/bothwell-hardscaping' },
            { name: 'Hamilton', href: '#/areas/hamilton-hardscaping' },
            { name: 'Newton Farm', href: '#/areas/newton-farm-hardscaping' },
          ]
        },
        { 
          name: 'Groundskeeping', 
          href: '#/services/groundskeeping',
          hasSubDropdown: true,
          subDropdownItems: [
            { name: 'Areas', isHeader: true },
            { name: 'Jackton', href: '#/areas/jackton-groundskeeping' },
            { name: 'Bothwell', href: '#/areas/bothwell-groundskeeping' },
            { name: 'Hamilton', href: '#/areas/hamilton-groundskeeping' },
            { name: 'Newton Farm', href: '#/areas/newton-farm-groundskeeping' },
          ]
        },
        { 
          name: 'Masonry & Brickwork', 
          href: '#/services/masonry-brickwork',
          hasSubDropdown: true,
          subDropdownItems: [
            { name: 'Areas', isHeader: true },
            { name: 'Jackton', href: '#/areas/jackton-masonry' },
            { name: 'Bothwell', href: '#/areas/bothwell-masonry' },
            { name: 'Hamilton', href: '#/areas/hamilton-masonry' },
            { name: 'Newton Farm', href: '#/areas/newton-farm-masonry' },
          ]
        },
      ]
    },
    { name: 'Areas', href: '#/areas' },
    { name: 'Gallery', href: '#/gallery' },
    { name: 'Reviews', href: '#/reviews' },
    { name: 'FAQ', href: '#/faq' },
    { name: 'Contact', href: '#/contact' },
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
    setActiveSubDropdown(null);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleSubDropdownEnter = (subItemName: string) => {
    setActiveSubDropdown(subItemName);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <a href="/" onClick={scrollToTop} className="flex items-center space-x-6">
              <img 
                src="/hsc-logo.webp" 
                alt="HSC Builders Logo" 
                className="w-20 h-20 object-contain"
              />
              <div>
                <h1 className="text-xl font-heading font-bold text-white">HSC BUILDERS</h1>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12 ml-32">
            {navigationItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className="text-white hover:text-primary-accent font-medium transition-colors duration-200 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <div
                          key={dropdownItem.name}
                          className="relative"
                          onMouseEnter={() => dropdownItem.hasSubDropdown && handleSubDropdownEnter(dropdownItem.name)}
                        >
                          <a
                            href={dropdownItem.href}
                            onClick={scrollToTop}
                            className="block px-4 py-3 text-white hover:text-primary-accent hover:bg-white/5 transition-colors duration-200 text-sm flex items-center justify-between"
                          >
                            {dropdownItem.name}
                            {dropdownItem.hasSubDropdown && (
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </a>
                          
                          {/* Sub-dropdown for Areas */}
                          {dropdownItem.hasSubDropdown && dropdownItem.subDropdownItems && activeSubDropdown === dropdownItem.name && (
                            <div className="absolute top-0 left-full ml-1 w-48 bg-black/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl z-50">
                              <div className="py-2">
                                {dropdownItem.subDropdownItems.map((subItem) => (
                                  subItem.isHeader ? (
                                    <div key={subItem.name} className="px-4 py-2 text-primary-accent font-semibold text-xs uppercase tracking-wide border-b border-white/10">
                                      {subItem.name}
                                    </div>
                                  ) : (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      onClick={scrollToTop}
                                      className="block px-4 py-2 text-white hover:text-primary-accent hover:bg-white/5 transition-colors duration-200 text-sm"
                                    >
                                      {subItem.name}
                                    </a>
                                  )
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-end space-y-1">
              <a
                href="tel:+447490738974"
                className="text-white hover:text-primary-accent font-medium transition-colors duration-200 text-sm"
              >
                07490 738 974
              </a>
              <a
                href="mailto:hscbuildersglasgow@gmail.com"
                className="text-white hover:text-primary-accent font-medium transition-colors duration-200 text-xs"
              >
                hscbuildersglasgow@gmail.com
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-accent transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white border-opacity-20 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-white">
                      {item.name}
                    </div>
                    {item.dropdownItems && item.dropdownItems.map((dropdownItem) => (
                      <div key={dropdownItem.name} className="ml-3">
                        <a
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-sm font-medium text-white hover:text-primary-accent hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors duration-200"
                          onClick={() => {
                            scrollToTop();
                            setIsMenuOpen(false);
                          }}
                        >
                          {dropdownItem.name}
                        </a>
                        {dropdownItem.hasSubDropdown && dropdownItem.subDropdownItems && (
                          <div className="ml-4 mt-1 space-y-1">
                            {dropdownItem.subDropdownItems.map((subItem) => (
                              subItem.isHeader ? (
                                <div key={subItem.name} className="px-3 py-1 text-primary-accent font-semibold text-xs uppercase tracking-wide">
                                  {subItem.name}
                                </div>
                              ) : (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-3 py-1 text-xs font-medium text-gray-300 hover:text-primary-accent hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200"
                                  onClick={() => {
                                    scrollToTop();
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </a>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-white hover:text-primary-accent hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors duration-200"
                    onClick={() => {
                      scrollToTop();
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
              <div className="flex flex-col space-y-2 mt-4">
                <a
                  href="#quote-form"
                  className="bg-primary-accent hover:bg-hover-accent text-white font-bold text-center py-3 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
                <a
                  href="https://wa.me/447490738974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-center py-3 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;