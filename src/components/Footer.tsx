import { Badge } from '@/components/ui/badge';

const Footer = () => {
  const footerLinks = {
    product: {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Integrations", href: "#integrations" },
        { name: "API Docs", href: "#docs" },
        { name: "Pricing", href: "#pricing" }
      ]
    },
    solutions: {
      title: "Solutions",
      links: [
        { name: "Enterprise", href: "#enterprise" },
        { name: "E-commerce", href: "#ecommerce" },
        { name: "B2B", href: "#b2b" },
        { name: "SME", href: "#sme" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Status", href: "#status" },
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#cases" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
        { name: "Privacy", href: "#privacy" }
      ]
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-background font-english mb-2">SenSearch</h3>
              <p className="text-background/70 leading-relaxed">
                Multimodal AI Search-as-a-Service ที่เข้าใจภาษาไทยและเอเชียตะวันออกเฉียงใต้ 
                เพิ่มการแปลงและลด Zero-result สำหรับธุรกิจทุกขนาด
              </p>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                🟢 All Systems Operational
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                🇹🇭 PDPA Compliant
              </Badge>
            </div>

            {/* Contact info */}
            <div className="space-y-2 text-sm text-background/70">
              <p>📧 hello@sensearch.ai</p>
              <p>📞 +66 (0) 2-xxx-xxxx</p>
              <p>📍 Bangkok, Thailand</p>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h4 className="font-semibold text-background">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-background/60">
              Copyright © 2024 SenSearch. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Twitter
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Made in Thailand */}
          <div className="text-center mt-6">
            <p className="text-xs text-background/50 flex items-center justify-center space-x-1">
              <span>Made with</span>
              <span className="text-red-400">❤️</span>
              <span>in Thailand</span>
              <span className="text-background/30">🇹🇭</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;