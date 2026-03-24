import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Download, CheckCircle, AlertCircle, FileText, Phone, ChevronRight, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Apply for Housing',
  description: 'Learn how to apply for affordable rental housing through the Indian Township Housing Authority for Passamaquoddy Tribe members.',
};

const steps = [
  { number:'01', title:'Download the Application', description:'Download and print the housing application using the link below, or pick up a paper copy at our office.' },
  { number:'02', title:'Complete the Application',  description:'Fill out all sections completely and accurately. Incomplete applications may delay processing.' },
  { number:'03', title:'Gather Required Documents', description:'Collect all required supporting documents listed below before submitting.' },
  { number:'04', title:'Submit Your Application',   description:'Deliver your completed application and documents in person to our office or by mail to PO Box 301, Princeton, ME 04668.' },
  { number:'05', title:'Wait for Review',           description:'Your application will be reviewed and you will be placed on our waiting list. We will contact you when housing becomes available.' },
];

const docsNeeded = [
  'Completed and signed housing application',
  'Proof of tribal enrollment (tribal ID or enrollment letter)',
  'Valid government-issued photo ID for all adult household members',
  'Social Security cards for all household members',
  'Proof of income for all household members (pay stubs, benefit letters, tax returns)',
  'Birth certificates for minor children',
  'Proof of any current housing situation (lease, letter, etc.)',
];

const eligibility = [
  'Be an enrolled member of the Passamaquoddy Tribe at Indian Township, or a member of a federally recognized tribe',
  'Meet income eligibility requirements based on family size',
  'Have a need for housing that meets the program criteria',
  'Agree to comply with all terms and conditions of the lease agreement',
  'Pass a background screening as required by Housing Authority policy',
  'Not owe money to any housing authority without an approved repayment plan',
];

export default function ApplyPage() {
  return (
    <>
      <PageHero title="Apply for Housing" subtitle="Safe, affordable rental housing for enrolled Passamaquoddy tribal members and eligible family households." breadcrumb="Apply for Housing" />
      <section className="bg-cream-100 py-14 px-4">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-forest-800 rounded-xl p-8 text-white text-center shadow-lg">
                <FileText className="w-12 h-12 text-green-300 mx-auto mb-4" aria-hidden="true" />
                <h2 className="font-heading font-bold text-2xl mb-2">Housing Application</h2>
                <p className="text-green-200 font-body mb-6">Download the official housing application form. Contact our office if you need assistance completing it.</p>
                {/* Add real PDF to /public/housing-application.pdf */}
                <a href="/housing-application.pdf" download className="btn-earth text-base px-8 py-3" aria-label="Download Housing Application PDF">
                  <Download className="w-5 h-5" aria-hidden="true" />Download Application (PDF)
                </a>
              </div>
              <div>
                <div className="accent-bar" />
                <h2 className="section-heading">How to Apply</h2>
                <ol className="space-y-4" role="list">
                  {steps.map((step) => (
                    <li key={step.number} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-cream-300">
                      <div className="w-10 h-10 rounded-full bg-forest-800 text-white flex items-center justify-center font-heading font-bold text-sm flex-shrink-0" aria-hidden="true">{step.number}</div>
                      <div>
                        <h3 className="font-heading font-bold text-forest-800 text-base mb-1">{step.title}</h3>
                        <p className="text-gray-600 font-body text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-300">
                <h2 className="font-heading font-bold text-forest-800 text-xl mb-4 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5" aria-hidden="true" />Required Documents
                </h2>
                <ul className="space-y-3" role="list">
                  {docsNeeded.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" aria-hidden="true" />{doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="card">
                <h2 className="font-heading font-bold text-forest-800 text-lg mb-4 border-b border-cream-300 pb-3">Eligibility Overview</h2>
                <ul className="space-y-3" role="list">
                  {eligibility.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-xs text-gray-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading font-bold text-yellow-800 text-sm mb-1">Waiting List</h3>
                    <p className="text-yellow-700 font-body text-xs leading-relaxed">Housing is subject to availability. Approved applicants are placed on a waiting list and contacted when a unit becomes available.</p>
                  </div>
                </div>
              </div>
              <div className="card border-navy-200 bg-navy-50">
                <h3 className="font-heading font-bold text-navy-800 text-base mb-2">Need Help?</h3>
                <p className="text-gray-600 font-body text-xs mb-3">Contact our office for assistance with your application.</p>
                <a href="tel:+12077963351" className="btn-navy text-xs px-3 py-2"><Phone className="w-3 h-3" aria-hidden="true" />(207) 796-3351</a>
                <div className="mt-2"><Link href="/contact" className="text-navy-700 font-body text-xs hover:text-navy-900 inline-flex items-center gap-1">Contact page <ChevronRight className="w-3 h-3" aria-hidden="true" /></Link></div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
