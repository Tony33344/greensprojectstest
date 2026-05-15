import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services#web" },
    { label: "AI & Machine Learning", href: "/services#ai" },
    { label: "Automation & Tools", href: "/services#automation" },
    { label: "Research & Data", href: "/services#research" },
  ],
  Company: [
    { label: "Projects", href: "/projects" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Green Spirit IT Solutions"
                width={240}
                height={72}
                className="h-60 w-auto object-contain"
              />
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm">
              AI-native software studio delivering full-stack web platforms,
              intelligent automation, and machine learning solutions that
              convert visitors into customers.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="mailto:info@greenspiritit.com"
                className="text-[var(--text-muted)] hover:text-green-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="text-[var(--text-muted)] hover:text-green-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-[var(--text-muted)] hover:text-green-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Green Spirit IT Solutions. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            60+ Projects Delivered · AI-Native Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
