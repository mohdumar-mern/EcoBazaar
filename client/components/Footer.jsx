import { Mail, Phone } from "lucide-react";
import NavButton from "./ui/NavButton";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        {/* 🌿 Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">EcoBazaar</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your eco-friendly shopping platform for sustainable living. 
            Discover products that make the planet greener.
          </p>
        </div>

        {/* ⚡ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="flex flex-col ">
            <li>
              <NavButton className="text-gray-400 font-light" variant="link" href="/home" label="Home" />
            </li>
            <li>
              <NavButton className="text-gray-400 font-light" variant="link" href="/products" label="Products" />
            </li>
            <li>
              <NavButton className="text-gray-400 font-light" variant="link" href="/contact" label="Contact" />
            </li>
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Mail size={16} /> <span>support@ecobazaar.com</span>
            </li>
            <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Phone size={16} /> <span>+91 9876543210</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ⚙️ Footer Bottom */}
      <div className="text-center border-t border-gray-800 mt-10 pt-4 text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-medium">EcoBazaar</span>. All rights reserved.
      </div>
    </footer>
  );
}
