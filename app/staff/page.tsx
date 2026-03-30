import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import StaffCard from '@/components/StaffCard';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Staff Directory',
  description: 'Meet the staff of the Indian Township Housing Authority — our dedicated team serving the Passamaquoddy Tribe at Indian Township.',
};

const staffMembers = [
  {
    name: 'Faithanne Brown',
    title: 'Executive Director',
    phone: '(207) 796-8004',
    email: 'fbrown0625@gmail.com',
    initials: 'FB',
    bio: 'As Executive Director, Faithanne provides leadership and oversight for all housing programs, staff, and operations of the Indian Township Housing Authority.',
  },
  {
    name: 'Dana Newell',
    title: 'Assistant Director (Collections)',
    phone: '(207) 796-8004',
    email: 'dananewell55@gmail.com',
    initials: 'DN',
    bio: 'Dana assists with the administration of housing programs and manages tenant accounts, collections, and related financial matters.',
  },
  {
    name: 'Keya Smiley',
    title: 'Pines & Occupancy Specialist',
    phone: '(207) 796-8004',
    email: 'keya.smiley3@gmail.com',
    initials: 'KS',
    bio: 'Keya manages occupancy for the Pines housing complex, assists applicants through the housing process, and supports tenants in their residency.',
  },
  {
    name: 'Donna Sockabasin',
    title: 'Bookkeeper',
    phone: '(207) 796-8004',
    email: 'sockabasin58@gmail.com',
    initials: 'DS',
    bio: 'Donna manages the financial records, accounts payable and receivable, and supports the fiscal operations of the Housing Authority.',
  },
  {
    name: 'Ron Sockabasin',
    title: 'Maintenance',
    phone: '(207) 796-8004',
    email: 'rsock@itpha.com',
    initials: 'RS',
    bio: 'Ron leads maintenance operations for Housing Authority properties, ensuring units are safe, functional, and well-maintained for all residents.',
  },
  {
    name: 'Jack Downing',
    title: 'Maintenance Worker',
    phone: '(207) 796-8004',
    initials: 'JD',
    bio: 'Jack supports maintenance operations across Housing Authority properties.',
  },
  {
    name: 'Chris Newell',
    title: 'Maintenance Worker',
    phone: '(207) 796-8004',
    initials: 'CN',
    bio: 'Chris supports maintenance operations across Housing Authority properties.',
  },
];

const commissioners = [
  { name: 'Jennifer Socobasin', role: 'Chairperson' },
  { name: 'Gerald Stevens',     role: 'Commissioner' },
  { name: 'Denise Polches',     role: 'Commissioner' },
  { name: 'Dolores Acheson',    role: 'Commissioner' },
  { name: 'Orenda Williams',    role: 'Commissioner' },
];

export default function StaffPage() {
  return (
    <>
      <PageHero title="Our Staff" subtitle="Our dedicated team is here to serve Passamaquoddy tribal members with housing assistance, tenant support, and community programs." breadcrumb="Staff" />

      {/* Staff Cards */}
      <section className="bg-cream-100 py-14 px-4" aria-labelledby="staff-heading">
        <div className="container-main">
          <div className="text-center mb-10">
            <div className="accent-bar mx-auto" />
            <h2 id="staff-heading" className="section-heading">Meet the Team</h2>
            <p className="text-gray-600 font-body max-w-xl mx-auto">We are a small, dedicated office committed to serving our tribal community with professionalism and care.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((staff) => <StaffCard key={staff.name} {...staff} />)}
          </div>
        </div>
      </section>

      {/* Board of Commissioners */}
      <section className="bg-white py-14 px-4" aria-labelledby="board-heading">
        <div className="container-main">
          <div className="accent-bar" />
          <h2 id="board-heading" className="section-heading">Board of Commissioners</h2>
          <p className="text-gray-600 font-body mb-8 max-w-2xl">The Indian Township Housing Authority is governed by a Board of Commissioners appointed by the Passamaquoddy Tribe at Indian Township.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
            {commissioners.map((c) => (
              <div key={c.name} className="card flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-white font-heading font-bold text-sm">{c.name.split(' ').map(n => n[0]).join('').slice(0,2)}</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-forest-800 text-sm leading-tight">{c.name}</p>
                  <p className="text-earth-700 font-body text-xs">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <section className="bg-cream-100 py-14 px-4" aria-labelledby="contact-block-heading">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="accent-bar" />
            <h2 id="contact-block-heading" className="section-heading">Contact the Office</h2>
            <p className="text-gray-600 font-body mb-8">Our office is open Monday through Friday. Please call or stop by — we are happy to help.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <address className="card not-italic space-y-4">
                <h3 className="font-heading font-bold text-forest-800 text-lg border-b border-cream-300 pb-3">Main Office</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-forest-800 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div className="font-body text-sm text-gray-700">
                    <p className="font-semibold">Mailing</p><p>PO Box 99, Princeton, ME 04668</p>
                    <p className="mt-2 font-semibold">Physical</p><p>10 Raven Rd, Princeton, ME 04668</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-forest-800 flex-shrink-0" aria-hidden="true" />
                  <div className="font-body text-sm text-gray-700">
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+12077968004" className="text-navy-800 hover:text-forest-800 transition-colors">(207) 796-8004</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-forest-800 flex-shrink-0" aria-hidden="true" />
                  <div className="font-body text-sm text-gray-700">
                    <p className="font-semibold">Email</p>
                    <a href="mailto:fbrown0625@gmail.com" className="text-navy-800 hover:text-forest-800 transition-colors">fbrown0625@gmail.com</a>
                  </div>
                </div>
              </address>
              <div className="space-y-4">
                <div className="card">
                  <h3 className="font-heading font-bold text-forest-800 text-lg border-b border-cream-300 pb-3 mb-4">Office Hours</h3>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-forest-800 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div className="font-body text-sm text-gray-700">
                      <p><span className="font-semibold">Monday – Friday:</span> 7:30 AM – 4:00 PM</p>
                      <p className="text-gray-500 mt-1">Closed on federal and tribal holidays</p>
                    </div>
                  </div>
                </div>
                <div className="card border-navy-200 bg-navy-50">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-navy-800 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-heading font-bold text-navy-800 text-sm mb-1">Send a Message</p>
                      <Link href="/contact" className="btn-navy text-xs px-3 py-2 mt-1 inline-flex">Use Our Contact Form</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
