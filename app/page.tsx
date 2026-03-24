import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, GraduationCap, Users, Bell, Phone, FileText, ChevronRight, Shield, Heart, Handshake } from 'lucide-react';
import QuickActionCard from '@/components/QuickActionCard';

export const metadata: Metadata = {
  title: 'Home | Indian Township Housing Authority',
  description: 'The Indian Township Housing Authority provides safe, affordable housing for Passamaquoddy Tribe members at Indian Township, Princeton, Maine.',
};

const quickActions = [
  { href:'/apply',    icon:Home,          title:'Apply for Housing',   description:'Download and submit a housing application for Indian Township rental units.',                               variant:'green' as const },
  { href:'/chap',     icon:GraduationCap, title:'Apply for CHAP',      description:'College Housing Assistance Program — financial support for enrolled tribal students.',                    variant:'brown' as const },
  { href:'/staff',    icon:Users,         title:'Meet Our Staff',      description:'Connect with our housing team — we are here to help tribal members.',                                    variant:'navy'  as const },
  { href:'/notices',  icon:Bell,          title:'Tenant Notices',      description:'Current announcements, reminders, and updates for housing residents.',                                   variant:'green' as const },
  { href:'/policies', icon:FileText,      title:'Policies & Forms',    description:'Download housing policies, rental agreements, and required forms.',                                      variant:'brown' as const },
  { href:'/contact',  icon:Phone,         title:'Contact Us',          description:'Reach our office by phone, fax, or in person at our Princeton location.',                               variant:'navy'  as const },
];

const values = [
  { icon:Shield,    title:'Safe Housing',       description:'We maintain quality, inspected homes that meet HUD standards and keep families safe and comfortable.' },
  { icon:Heart,     title:'Family-Centered',    description:'Our programs are designed with Passamaquoddy families and elders at the center of every decision.' },
  { icon:Handshake, title:'Community Service',  description:'We are committed to serving tribal members with respect, dignity, and a spirit of partnership.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-800 text-white overflow-hidden" aria-label="Welcome banner">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          {/* REPLACE with real tribal/landscape photo */}
          <Image src="https://picsum.photos/seed/passamaquoddy/1600/600" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'repeating-linear-gradient(45deg,#78350f 0px,#78350f 2px,transparent 2px,transparent 20px)'}} aria-hidden="true" />
        <div className="relative container-main py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-green-300 font-body text-sm uppercase tracking-widest mb-3 font-semibold">Passamaquoddy Tribe at Indian Township</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-5">
              Providing Safe, Affordable Housing for <span className="text-green-300">Passamaquoddy Families</span> at Indian Township
            </h1>
            <p className="text-green-100 font-body text-lg leading-relaxed mb-8">
              The Indian Township Housing Authority serves tribal members with quality rental housing, community programs, and educational assistance — rooted in respect for our culture and commitment to our people.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/apply" className="btn-earth">Apply for Housing <ChevronRight className="w-4 h-4" aria-hidden="true" /></Link>
              <Link href="/chap" className="inline-flex items-center gap-2 border-2 border-white text-white px-5 py-3 rounded-lg font-body font-semibold text-sm hover:bg-white hover:text-forest-800 transition-colors duration-200">CHAP Program</Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-green-300 text-green-300 px-5 py-3 rounded-lg font-body font-semibold text-sm hover:bg-green-300 hover:text-forest-900 transition-colors duration-200">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tribal accent bar */}
      <div className="h-3" style={{background:'repeating-linear-gradient(90deg,#78350f 0px,#78350f 20px,#166534 20px,#166534 40px)'}} aria-hidden="true" />

      {/* About Summary */}
      <section className="bg-white py-14 px-4" aria-labelledby="about-heading">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="accent-bar" />
              <h2 id="about-heading" className="section-heading">About the Housing Authority</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                The Indian Township Housing Authority is a tribally chartered organization that provides affordable housing and related services to enrolled members of the Passamaquoddy Tribe at Indian Township located in Princeton, Maine.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-6">
                We administer federally assisted housing programs, maintain quality rental units, and offer assistance programs such as the College Housing Assistance Program (CHAP) to support our tribal community members at every stage of life.
              </p>
              <Link href="/about" className="btn-primary">Read Our Full Story <ChevronRight className="w-4 h-4" aria-hidden="true" /></Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
              {/* REPLACE with real community photo */}
              <Image src="https://picsum.photos/seed/tribal-community/700/400" alt="Indian Township community — placeholder" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              <div className="absolute bottom-0 left-0 right-0 bg-forest-800/70 text-white text-xs font-body p-2 text-center">📷 Replace with real community or office photo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-cream-100 py-14 px-4" aria-labelledby="services-heading">
        <div className="container-main">
          <div className="text-center mb-10">
            <div className="accent-bar mx-auto" />
            <h2 id="services-heading" className="section-heading">How We Can Help You</h2>
            <p className="text-gray-600 font-body max-w-xl mx-auto">Access housing applications, community programs, staff information, and more.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickActions.map((action) => <QuickActionCard key={action.href} {...action} />)}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-forest-800 py-14 px-4 text-white" aria-labelledby="values-heading">
        <div className="container-main">
          <div className="text-center mb-10">
            <div className="accent-bar bg-earth-600 mx-auto" />
            <h2 id="values-heading" className="text-3xl font-heading font-bold text-white mb-3">Our Commitment to Our Community</h2>
            <p className="text-green-200 font-body max-w-xl mx-auto">Guided by Passamaquoddy values of respect, responsibility, and care for one another.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-forest-700/50 rounded-xl p-6 border border-forest-600">
                  <div className="w-12 h-12 rounded-lg bg-earth-700 flex items-center justify-center mb-4" aria-hidden="true">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{v.title}</h3>
                  <p className="text-green-200 font-body text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-12 px-4" aria-label="Contact call to action">
        <div className="container-main text-center">
          <h2 className="section-heading mb-3">Have Questions?</h2>
          <p className="text-gray-600 font-body mb-6 max-w-lg mx-auto">Our office is open Monday–Friday. We are happy to assist you with housing questions, applications, or any other needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+12077963351" className="btn-primary"><Phone className="w-4 h-4" aria-hidden="true" />(207) 796-3351</a>
            <Link href="/contact" className="btn-secondary">Contact Page <ChevronRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
