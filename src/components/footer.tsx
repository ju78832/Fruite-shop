"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log("Newsletter subscription submitted");
  };

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-6 mx-auto px-4">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold">Farmlyf</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Pure, Nutritious, and Delicious Dry Fruits
                </p>
              </div>
              
              <address className="text-xs text-muted-foreground not-italic space-y-0.5">
                <p>HIG-461, K-5 Subudhipur, Kalinga Nagar</p>
                <p>Bhubaneswar, Khorda Nagar, Orissa-751019</p>
                <p>
                  <a href="tel:18008908177" className="hover:text-primary">
                    Phone: 1800 890 8177
                  </a>
                  {" | "}
                  <a href="mailto:care@farmlyf.in" className="hover:text-primary">
                    Email: care@farmlyf.in
                  </a>
                </p>
              </address>

              <div className="flex gap-2" role="list" aria-label="Social media links">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors p-1"
                    aria-label={`Follow us on ${link.name}`}
                    role="listitem"
                  >
                    <link.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="space-y-2">
              <h4 className="text-sm font-medium">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Newsletter</h4>
            <p className="text-xs text-muted-foreground">
              Get updates on new products
            </p>
            <form className="space-y-2" onSubmit={handleNewsletterSubmit}>
              <Input 
                placeholder="Your email" 
                type="email"
                className="text-xs h-8"
                aria-label="Email address for newsletter"
              />
              <Button 
                type="submit"
                variant="outline" 
                size="sm" 
                className="text-xs h-8 w-full"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-3 border-t text-center text-xs text-muted-foreground">
          © {currentYear} Farmlyf. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
