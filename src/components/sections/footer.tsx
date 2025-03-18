"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState(2025);
  
  // Footer navigation structure
  const footerSections = [
    {
      title: "PRODUCT",
      links: [
        { label: "Coding Agent", href: "/coding-agent" },
        { label: "Features", href: "/features" },
        { label: "Repo Grokking", href: "/repo-grokking" },
        { label: "Integrations", href: "/integrations" },
        { label: "Agentic Pipeline", href: "/agentic-pipeline" },
        { label: "Pricing", href: "/pricing" },
        { label: "Enterprise", href: "/enterprise" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Webinars", href: "/webinars" },
        { label: "Customer Stories", href: "/customer-stories" },
        { label: "Events", href: "/events" },
        { label: "Help Center", href: "/help-center" },
        { label: "Community", href: "/community" },
        { label: "Glossary", href: "/glossary" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Newsroom", href: "/newsroom" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      title: "TERMS AND POLICIES",
      links: [
        { label: "Terms Of Service", href: "/terms-of-service" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Usage Policy", href: "/usage-policy" },
      ],
    },
  ];

  // Theme toggle options
  const themeOptions = [
    { icon: "☀️", value: "light" },
    { icon: "🌙", value: "dark" },
    { icon: "💻", value: "system" },
    { icon: "👤", value: "accessibility" },
  ];

  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="container mx-auto">
        {/* Logo and navigation */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Logo */}
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-orange-500 text-2xl mr-2">●●●</span>
              <span className="text-white text-xl font-bold">zencoder</span>
            </Link>
          </div>

          {/* Navigation sections */}
          <div className="flex flex-wrap gap-10 lg:gap-16">
            {footerSections.map((section) => (
              <div key={section.title} className="mb-8 min-w-40">
                <h3 className="text-sm font-medium text-gray-400 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col lg:flex-row items-center">
          {/* Theme toggle */}
          <div className="flex items-center bg-gray-800 rounded-lg p-1 mb-4 lg:mb-0">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-700"
                aria-label={`Switch to ${option.value} mode`}
              >
                {option.icon}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 flex-grow text-center lg:text-left lg:ml-4">
            © {year} For Good AI Inc. All rights reserved.
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <span className="text-gray-400 hover:text-white">in</span>
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter/X">
              <span className="text-gray-400 hover:text-white">𝕏</span>
            </Link>
            <Link href="https://discord.com" aria-label="Discord">
              <span className="text-gray-400 hover:text-white">🎮</span>
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <span className="text-gray-400 hover:text-white">▶️</span>
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <span className="text-gray-400 hover:text-white">📷</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}