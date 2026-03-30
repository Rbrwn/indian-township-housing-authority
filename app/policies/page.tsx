import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Download, FileText, Shield, AlertCircle, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Policies & Forms',
  description: 'Download housing policies, rental agreements, and required forms from the Indian Township Housing Authority.',
};

const docs = [
  { title:'Housing Rental Policies',    description:'Complete rental policies covering lease terms, tenant obligations, rent payment, maintenance, and grievance procedures.', file:'/housing-rental-policies.pdf',  category:'Core Policy' },
  { title:'Tenant Handbook',            description:'A guide for current tenants explaining housing rules, maintenance procedures, and community expectations.',                file:'/tenant-handbook.pdf',          category:'Tenant Resource' },
  { title:'Housing Application',        description:'The official housing application form for prospective tenants. See the Apply page for full instructions.',                file:'/housing-application.pdf',      category:'Application' },
  { title:'CHAP Application',           description:'College Housing Assistance Program application. See the CHAP page for full program details and eligibility.',            file:'/chap-application.pdf',         category:'Application' },
  { title:'Maintenance Request Form',   description:'Use this form to submit a written maintenance request for your unit. You may also call the office directly.',            file:'/maintenance-request.pdf',      category:'Form' },
  { title:'Lease Agreement (Sample)',   description:'Sample standard residential lease agreement used by the Indian Township Housing Authority.',                              file:'/sample-lease-agreement.pdf',   category:'Form' },
  { title:'Rural Development 515 Application', description:'Application for the Rural Development 515 Senior Apartment Program — Pines I & II Senior Apartments at Indian Township.',  file:'/rural-development-515-application.pdf', category:'Application' },
];

const highlights = [
  { title:'Rent Payment', points:['Rent is due on the 1st of each month.','A grace period may be granted — contact the office for current policy.','Late payments may result in late fees and affect your housing status.','Payment plans may be available for tenants experiencing hardship.'] },
  { title:'Maintenance & Repairs', points:['Tenants must report maintenance issues promptly to the Housing Authority.','The Housing Authority is responsible for maintaining safe and habitable conditions.','Tenants are responsible for damages beyond normal wear and tear.','Emergency maintenance issues should be reported immediately by calling the office.'] },
  { title:'Lease Obligations', points:['Tenants must comply with all terms of their lease agreement.','Unauthorized occupants are not permitted without prior approval.','Lease violations may result in a notice to cure or notice to quit.','Tenants have the right to a hearing before any eviction action is taken.'] },
  { title:'Tenant Rights', points:['Tenants have the right to a safe, decent, and sanitary housing unit.','Tenants may submit a written grievance regarding any Housing Authority decision.','The Housing Authority will not retaliate against tenants who exercise their rights.','Tenants are entitled to reasonable accommodations for disabilities.'] },
];

const catColors: Record<string,string> = {
  'Core Policy':    'bg-forest-100 text-forest-800 border-forest-200',
  'Tenant Resource':'bg-navy-100 text-navy-800 border-navy-200',
  'Application':    'bg-earth-100 text-earth-800 border-earth-200',
  'Form':           'bg-cream-200 text-gray-700 border-cream-300',
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero title="Policies & Forms" subtitle="Download housing policies, forms, and important documents for tenants and applicants." breadcrumb="Policies & Forms" />

      <section className="bg-cream-100 py-14 px-4" aria-labelledby="downloads-heading">
        <div className="container-main">
          <div className="accent-bar" />
          <h2 id="downloads-heading" className="section-heading">Documents &amp; Downloads</h2>
          <p className="text-gray-600 font-body mb-6 max-w-2xl">All documents are available as PDF files. Contact our office if you need a paper copy or assistance accessing any document.</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <p className="text-yellow-800 font-body text-sm"><strong>Note:</strong> PDF links are placeholders. Add real documents to the <code>/public/</code> folder with the matching filenames to activate downloads.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {docs.map((doc) => (
              <article key={doc.title} className="bg-white rounded-xl border border-cream-300 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between gap-2">
                  <FileText className="w-8 h-8 text-forest-800 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className={`text-xs font-body font-semibold px-2 py-0.5 rounded border ${catColors[doc.category] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>{doc.category}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-forest-800 text-base mb-1">{doc.title}</h3>
                  <p className="text-gray-600 font-body text-xs leading-relaxed">{doc.description}</p>
                </div>
                <a href={doc.file} download className="btn-primary text-xs px-3 py-2 mt-auto" aria-label={`Download ${doc.title} PDF`}>
                  <Download className="w-4 h-4" aria-hidden="true" />Download PDF
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 px-4" aria-labelledby="highlights-heading">
        <div className="container-main">
          <div className="accent-bar" />
          <h2 id="highlights-heading" className="section-heading">Key Policy Highlights</h2>
          <p className="text-gray-600 font-body mb-8 max-w-2xl">These summaries are for general information only. Always refer to the full policy documents for complete terms.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((s) => (
              <div key={s.title} className="card">
                <h3 className="font-heading font-bold text-forest-800 text-lg mb-4 pb-3 border-b border-cream-300 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-earth-700" aria-hidden="true" />{s.title}
                </h3>
                <ul className="space-y-2" role="list">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-gray-700">
                      <ChevronRight className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" aria-hidden="true" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-forest-50 border border-forest-200 rounded-xl p-6 text-center">
            <p className="text-gray-700 font-body text-sm mb-3">Questions about housing policies or your rights as a tenant?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">Contact Our Office</Link>
              <Link href="/staff" className="btn-secondary">View Staff Directory</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
