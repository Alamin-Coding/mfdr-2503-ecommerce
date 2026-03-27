import { useState } from "react";

import QRCode from "../assets/Qr-Code.svg"
import appleStore from "../assets/appstore.png"
import googlePlayStore from "../assets/google-play-store.png"

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);



const Footer = ()=> {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: <FacebookIcon />, label: "Facebook" },
    { icon: <TwitterIcon />, label: "Twitter" },
    { icon: <InstagramIcon />, label: "Instagram" },
    { icon: <LinkedinIcon />, label: "LinkedIn" },
  ];

  const supportInfo = [
    { type: "address", value: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh." },
    { type: "email", value: "exclusive@gmail.com" },
    { type: "phone", value: "+88015-88888-9999" },
  ];

  const accountLinks = ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"];
  const quickLinks = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand & Subscribe */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Exclusive</h2>
            <p className="text-sm font-semibold mb-2">Subscribe</p>
            <p className="text-sm text-gray-400 mb-4">Get 10% off your first order</p>
            <form onSubmit={handleSubscribe} className="flex items-center border border-gray-600 rounded overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-sm px-3 py-2 outline-none placeholder-gray-500 text-white"
              />
              <button
                type="submit"
                className="px-3 py-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Subscribe"
              >
                <SendIcon />
              </button>
            </form>
            {subscribed && (
              <p className="text-green-400 text-xs mt-2">✓ Subscribed successfully!</p>
            )}
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-5">Support</h3>
            <ul className="space-y-4">
              {supportInfo.map(({ type, value }) => (
                <li key={type} className="text-sm text-gray-400 leading-relaxed">
                  {type === "email" ? (
                    <a href={`mailto:${value}`} className="hover:text-white transition-colors">{value}</a>
                  ) : type === "phone" ? (
                    <a href={`tel:${value}`} className="hover:text-white transition-colors">{value}</a>
                  ) : (
                    value
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-5">Account</h3>
            <ul className="space-y-3">
              {accountLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-5">Quick Link</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-5">Download App</h3>
            <p className="text-xs text-gray-500 mb-3">Save $3 with App New User Only</p>

            <div className="flex items-center gap-3 mb-5">
              {/* QR Code */}
              <div className="bg-white rounded w-16 h-16 flex items-center justify-center flex-shrink-0">
                <img src={QRCode} alt="image" />
              </div>

              {/* Store Badges */}
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="flex items-center"
                >
                  <img src={googlePlayStore} alt="image" />
                </a>
                <a
                  href="#"
                  className="flex items-center"
                >
                 <img src={appleStore} alt="image" />
                </a>

              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center">
          <p className="text-sm text-gray-500">© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer