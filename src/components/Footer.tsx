import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Oceanic Stays</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Curating exceptional oceanfront experiences where minimalist luxury meets the infinite horizon.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 smooth-transition">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 smooth-transition">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 smooth-transition">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press', 'Blog', 'Partnerships'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-white smooth-transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Safety Information', 'Cancellation Options', 'Community Guidelines', 'Trust & Safety'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-white smooth-transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-slate-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-slate-400" />
                <span className="text-slate-300">hello@oceanicstays.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-slate-400" />
                <span className="text-slate-300">
                  123 Coastal Drive<br />
                  Monterey, CA 93940
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Oceanic Stays. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white smooth-transition">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white smooth-transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}