import Link from 'next/link';
import { Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-900 text-green-100 mt-auto" role="contentinfo" aria-label="Site footer">
      <div className="h-2" style={{ background: 'repeating-linear-gradient(90deg,#78350f 0px,#78350f 20px,#166534 20px,#166534 40px)' }} aria-hidden="true" />
      <div className="container-main py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white font-heading font-bold text-lg mb-1">Indian Township Housing Authority</h2>
            <p className="text-green-300 text-sm font-body mb-3">Passamaquoddy Tribe at Indian Township</p>
            <p className="text-green-200 text-sm font-body leading-relaxed">Providing safe, affordable housing and community support for Passamaquoddy families in Princeton, Maine.</p>
          </div>
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-3">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm" role="list">
              {[
                { href:'/about',    label:'About the Authority' },
                { href:'/apply',    label:'Apply for Housing' },
                { href:'/chap',     label:'College Housing Assistance (CHAP)' },
                { href:'/policies', label:'Housing Policies' },
                { href:'/notices',  label:'Tenant Notices' },
                { href:'/blog',     label:'News & Announcements' },
                { href:'/contact',  label:'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-green-300 hover:text-white transition-colors duration-150">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-3">Contact</h3>
            <address className="not-italic font-body text-sm space-y-2 text-green-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-earth-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>PO Box 99 / 10 Raven Rd<br />Princeton, ME 04668</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-earth-400 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+12077968004" className="hover:text-white transition-colors">(207) 796-8004</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-200 text-xs font-body">Mon–Fri: 7:30 AM – 4:00 PM</span>
              </div>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-forest-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-green-400">
          <p>&copy; {year} Indian Township Housing Authority — Passamaquoddy Tribe at Indian Township. All rights reserved.</p>
          <a href="https://www.passamaquoddy.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-300 hover:text-white transition-colors">
            Passamaquoddy Tribe <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
