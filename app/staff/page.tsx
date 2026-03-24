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
  { name:'Faithanne Brown',    title:'Executive Director',                phone:'(207) 796-3351', initials:'FB', bio:'As Executive Director, Faithanne provides leadership and oversight for all housing programs, staff, and operations of the Indian Township Housing Authority.' },
  { name:'Dana Newell',        title:'Assistant Director (Collections)',  phone:'(207) 796-3351', initials:'DN', bio:'Dana assists with the administration of housing programs and manages tenant accounts, collections, and related financial matters.' },
  { name:'Kia Smiley',         title:'Pines & Occupancy Specialist',      phone:'(207) 796-3351', initials:'KS', bio:'Kia manages occupancy for the Pines housing complex, assists applicants through the housing process, and supports tenants in their residency.' },
  { name:'Donna Sockabasin',   title:'Bookkeeper',                        phone:'(207) 796-3351', initials:'DS', bio:'Donna manages the financial records, accounts payable and receivable, and supports the fiscal operations of the Housing Authority.' },
  { name:'Ron Sockabasin',     title:'Maintenance',                       phone:'(207) 796-3301', initials:'RS', bio:'Ron leads maintenance operations for Housing Authority properties, ensuring units are safe, functional, and well-maintained for all residents.' },
];

export default function StaffPage() {
  return (
    <>
      <PageHero title="Our Staff" subtitle="Our dedicated team is here to serve Passamaquoddy tribal members with housing assistance, tenant support, and community programs." breadcrumb="Staff" />
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
      <section className="bg-white py-14 px-4" aria-labelledby="contact-block-heading">
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
                    <p className="font-semibold">Mailing</p><p>PO Box 301, Princeton, ME 04668</p>
                    <p className="mt-2 font-semibold">Physical</p><p>7 Birch Point Road, Princeton, ME 04668</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-forest-800 flex-shrink-0" aria-hidden="true" />
                  <div className="font-body text-sm text-gray-700">
                    <p className="font-semibold">Main</p>
                    <a href="tel:+12077963351" className="text-navy-800 hover:text-forest-800 transition-colors">(207) 796-3351</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-forest-800 flex-shrink-0" aria-hidden="true" />
                  <div className="font-body text-sm text-gray-700">
                    <p className="font-semibold">Alternate</p>
                    <a href="tel:+12077963301" className="text-navy-800 hover:text-forest-800 transition-colors">(207) 796-3301</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-forest-800 flex-shrink-0 font-bold text-xs flex items-center justify-center" aria-hidden="true">FAX</span>
                  <p className="font-body text-sm text-gray-700">(207) 796-5357</p>
                </div>
              </address>
              <div className="space-y-4">
                <div className="card">
                  <h3 className="font-heading font-bold text-forest-800 text-lg border-b border-cream-300 pb-3 mb-4">Office Hours</h3>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-forest-800 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div className="font-body text-sm text-gray-700">
                      <p><span className="font-semibold">Monday – Friday:</span> 8:00 AM – 4:00 PM</p>
                      <p className="text-gray-500">Closed on federal and tribal holidays</p>
                    </div>
                  </div>
                </div>
                <div className="card border-navy-200 bg-navy-50">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-navy-800 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-heading font-bold text-navy-800 text-sm mb-1">Prefer to write?</p>
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
