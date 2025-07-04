
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-playfair font-bold text-terracotta-400">
              Italiano
            </h3>
            <p className="text-cream-200 leading-relaxed">
              Bringing the elegance of Italian fashion to women around the world. 
              Timeless style, exceptional quality.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-cream-300 hover:text-terracotta-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-cream-300 hover:text-terracotta-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-cream-300 hover:text-terracotta-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-cream-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Collections', 'New Arrivals', 'Sale', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream-300 hover:text-terracotta-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-cream-100">
              Customer Care
            </h4>
            <ul className="space-y-2">
              {['Size Guide', 'Shipping Info', 'Returns', 'FAQ', 'Care Instructions'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream-300 hover:text-terracotta-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-cream-100">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-terracotta-400" />
                <span className="text-cream-300 text-sm">Via della Moda 123, Milano, Italy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-terracotta-400" />
                <span className="text-cream-300 text-sm">+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-terracotta-400" />
                <span className="text-cream-300 text-sm">info@italiano.fashion</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-800 mt-12 pt-8 text-center">
          <p className="text-cream-400 text-sm">
            © 2024 Italiano Fashion. All rights reserved. Made with ❤️ in Milano.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
