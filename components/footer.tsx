"use client";

import React, { useEffect } from "react";
import { Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";

const ParallaxFooter = () => {
  //   const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      //   setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   const parallaxOffset = Math.min(scrollY * 0.3, 100);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-cyan-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-cyan-400",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:text-cyan-400",
    },
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <footer
      className=" bg-gradient-to-br from-gray-900 via-cyan-900 to-cyan-900 text-gray-100 overflow-hidden"
      //   style={{
      //     transform: `translateY(${parallaxOffset}px)`,
      //     opacity: Math.min(parallaxOffset / 50, 1),
      //     transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      //   }}
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-700" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-6 lg:space-y-0 w-full">
        {/* Company Info */}
        <div className="flex flex-col items-center lg:items-start space-y-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent">
            Company Name
          </h2>
          <img
            src="/path/to/logo.png"
            alt="Company Logo"
            className="h-16 transform transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Contact Info */}
        <div className="space-y-6 lg:space-y-0">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-center lg:justify-start space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Mail size={18} />
              <span>nsaneduniversity@gmail.com</span>
            </li>
            {/* <li className="flex items-center justify-center lg:justify-start space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Phone size={18} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <MapPin size={18} />
              <span>123 Business Ave, Suite 100</span>
            </li> */}
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-6 lg:space-y-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-500 hover:scale-110 ${color} p-2 bg-gray-800 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20`}
                aria-label={label}
              >
                <Icon size={20} className="transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Developer Section - Banner Style */}
      <div className="relative z-20">
        <footer className="bg-[#020817] text-gray-400 py-4">
          <div className="container mx-auto text-center">
            <p className="text-sm md:text-base font-medium">
              Built with <span className="text-red-500">❤</span> by
              <a
                href="https://www.linkedin.com/in/shaukat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline ml-1"
              >
                Shaukat
              </a>
            </p>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default ParallaxFooter;
