import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { ChevronRight, Building2, Users, BookOpen, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the Indian Township Housing Authority — our mission, history, and commitment to the Passamaquoddy Tribe at Indian Township, Princeton, Maine.',
};

const highlights = [
  { icon:Building2, label:'Tribally Chartered',    detail:'Established under the authority of the Passamaquoddy Tribe at Indian Township' },
  { icon:Users,     label:'Community Focus',       detail:'Serving enrolled tribal members and their families' },
  { icon:BookOpen,  label:'HUD-Assisted Programs', detail:'Administering federally assisted housing in compliance with tribal and federal requirements' },
  { icon:Target,    label:'Comprehensive Services',detail:'Housing, maintenance, rental assistance, and educational support programs' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About the Housing Authority" subtitle="Serving the Passamaquoddy community with safe, affordable homes and dedicated support." breadcrumb="About" />
      <section className="bg-white py-14 px-4">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6 font-body text-gray-700 leading-relaxed">
              <div>
                <div className="accent-bar" />
                <h2 className="section-heading">Who We Are</h2>
                <p>The Indian Township Housing Authority (ITHA) is a tribally chartered housing authority established to provide affordable, safe, and decent housing and related services to enrolled members of the Passamaquoddy Tribe at Indian Township, located in Princeton, Maine.</p>
                <p className="mt-4">As a tribally designated housing entity (TDHE), the Indian Township Housing Authority receives federal funding through the Native American Housing Assistance and Self-Determination Act (NAHASDA) and works in close partnership with the tribal government to carry out its housing mission.</p>
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-forest-800 mt-8 mb-3">Our Mission</h2>
                <p>The mission of the Indian Township Housing Authority is to improve the quality of life of tribal members by providing and maintaining safe, decent, and affordable housing; supporting self-sufficiency and homeownership opportunities; and offering educational and financial assistance programs that strengthen the Passamaquoddy community.</p>
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-forest-800 mt-8 mb-3">Our Programs &amp; Services</h2>
                <p>The Indian Township Housing Authority administers a range of housing programs and services, including:</p>
                <ul className="list-disc list-inside space-y-2 mt-3 text-gray-700 font-body">
                  <li><strong>Tribal Rental Housing:</strong> Affordable rental units for eligible tribal members and their families, maintained to HUD standards.</li>
                  <li><strong>College Housing Assistance Program (CHAP):</strong> Financial assistance to enrolled tribal members attending college who live in off-reservation housing.</li>
                  <li><strong>Maintenance Services:</strong> Dedicated maintenance staff to ensure housing units remain safe and in good repair.</li>
                  <li><strong>Tenant Support:</strong> Assistance to tenants in understanding lease obligations, housing policies, and available community resources.</li>
                  <li><strong>Housing Applications &amp; Waiting Lists:</strong> Processing of housing applications in accordance with tribal preference and established eligibility criteria.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-forest-800 mt-8 mb-3">Our Commitment to the Passamaquoddy People</h2>
                <p>The Indian Township Housing Authority is deeply rooted in the values and traditions of the Passamaquoddy people. We recognize that stable, affordable housing is fundamental to the health, dignity, and well-being of our families and our community. Our staff are committed to serving tribal members with respect, integrity, and a genuine spirit of partnership.</p>
                <p className="mt-4">Whether assisting a family in applying for housing, supporting a college student through CHAP, or maintaining the safety and comfort of our rental units, the Indian Township Housing Authority is proud to play a vital role in sustaining a strong and vibrant Passamaquoddy community at Indian Township.</p>
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-forest-800 mt-8 mb-3">Governance &amp; Accountability</h2>
                <p>The Indian Township Housing Authority operates under the oversight of the Passamaquoddy Tribe at Indian Township tribal government. We comply with all applicable federal regulations under NAHASDA and HUD guidelines, and we are committed to transparent and accountable stewardship of all public funds entrusted to us.</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link href="/staff" className="btn-primary">Meet Our Team <ChevronRight className="w-4 h-4" aria-hidden="true" /></Link>
                <Link href="/contact" className="btn-secondary">Get in Touch <ChevronRight className="w-4 h-4" aria-hidden="true" /></Link>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow aspect-square">
                <Image src="/community-photo.png" alt="Indian Township Housing Authority — tipi and log cabin illustration" fill className="object-contain bg-white p-4" sizes="(max-width:1024px) 100vw, 33vw" />
              </div>
              <div className="card">
                <h3 className="font-heading font-bold text-forest-800 text-base mb-4">At a Glance</h3>
                <ul className="space-y-4" role="list">
                  {highlights.map((h) => {
                    const Icon = h.icon;
                    return (
                      <li key={h.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-md bg-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-body font-semibold text-sm text-forest-800">{h.label}</p>
                          <p className="font-body text-xs text-gray-600 leading-snug">{h.detail}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="card bg-forest-50 border-forest-200">
                <h3 className="font-heading font-bold text-forest-800 text-sm mb-2">Passamaquoddy Tribe</h3>
                <p className="text-gray-600 font-body text-xs mb-3">Learn more about the Passamaquoddy Tribe at Indian Township.</p>
                <a href="https://www.passamaquoddy.com/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-3 py-2">Visit Tribe Website ↗</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
