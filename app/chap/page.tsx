import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { GraduationCap, Download, CheckCircle, Calendar, FileText, AlertCircle, Phone, Star, ChevronRight, BookOpen, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'College Housing Assistance Program (CHAP)',
  description: 'The College Housing Assistance Program (CHAP) provides housing assistance to enrolled Passamaquoddy tribal members attending college.',
};

const postingDates = [
  { semester:'Fall Semester',   deadline:'June 1',     notes:'For fall term enrollment' },
  { semester:'Spring Semester', deadline:'November 1', notes:'For spring term enrollment' },
  { semester:'Summer Session',  deadline:'April 1',    notes:'Limited funding — apply early' },
];

const eligibility = [
  'Must be an enrolled member of the Passamaquoddy Tribe at Indian Township',
  'Must be currently enrolled or accepted at an accredited college, university, or vocational/technical program',
  'Must be enrolled at least half-time (unless a documented disability prevents full-time enrollment)',
  'Must reside in off-reservation housing during the period of assistance',
  'Must be in good standing with the Indian Township Housing Authority',
  'Must demonstrate financial need as determined by the Housing Authority',
  'Must not be receiving duplicate housing assistance from another source for the same period',
];

const notEligible = [
  'Students residing in on-campus dormitories covered by room and board',
  'Students receiving duplicate housing assistance from another source',
  'Students who are not enrolled at least half-time',
  'Students with outstanding debt to the Housing Authority',
];

const preferences = [
  { label:'Tribal Enrollment',    detail:'Enrolled members of the Passamaquoddy Tribe at Indian Township receive first preference.' },
  { label:'Full-Time Enrollment', detail:'Students enrolled full-time receive preference over part-time students when funding is limited.' },
  { label:'Academic Standing',    detail:'Students in good academic standing at their institution.' },
  { label:'Continuing Students',  detail:'Students who have successfully maintained enrollment from a prior CHAP-funded semester.' },
];

const requiredDocs = [
  'Completed and signed CHAP application form',
  'Proof of tribal enrollment (copy of tribal ID or enrollment letter)',
  'Official acceptance or enrollment letter from the college/university',
  'Documentation of course load (enrollment verification showing at least half-time status)',
  'Signed copy of your off-campus lease or rental agreement for the period of assistance',
  'Proof of rent amount (copy of lease showing monthly rent due)',
  'Official financial aid award letter from your institution (if applicable)',
  'Most recent federal tax return or income documentation for your household',
  'Social Security card and valid government-issued photo ID',
];

const rules = [
  'CHAP assistance is awarded on a semester-by-semester basis. There is no automatic renewal — applicants must reapply each semester.',
  'Payments are made directly to the landlord or housing provider on behalf of the student. Students do not receive cash payments.',
  'Students must notify the Housing Authority immediately of any changes in enrollment status, housing arrangement, or other aid received.',
  'If a student withdraws or drops below half-time enrollment during a funded semester, assistance will be discontinued and may be subject to recoupment.',
  'CHAP funds are limited. Meeting eligibility criteria does not guarantee an award. Applications are reviewed based on available resources.',
  'Students receiving CHAP assistance may not simultaneously receive other housing subsidies that cover the same housing costs.',
  'All information submitted on the CHAP application must be accurate and complete. Providing false information may result in disqualification.',
  'Students must maintain satisfactory academic progress as defined by their institution to remain eligible.',
];

export default function ChapPage() {
  return (
    <>
      <PageHero title="College Housing Assistance Program" subtitle="Financial housing support for enrolled Passamaquoddy tribal members pursuing higher education." breadcrumb="CHAP" />

      <section className="bg-earth-700 text-white py-8 px-4">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <GraduationCap className="w-10 h-10 text-earth-300 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-heading font-bold text-lg">CHAP — College Housing Assistance Program</p>
                <p className="text-earth-200 text-sm font-body">Helping tribal students afford off-campus housing while pursuing their education</p>
              </div>
            </div>
            <a href="/chap-application.pdf" download className="inline-flex items-center gap-2 bg-white text-earth-700 px-5 py-3 rounded-lg font-body font-semibold text-sm hover:bg-cream-200 transition-colors flex-shrink-0" aria-label="Download CHAP Application PDF">
              <Download className="w-4 h-4" aria-hidden="true" />Download CHAP Application
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-14 px-4">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">

              {/* About */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-300">
                <div className="accent-bar" />
                <h2 className="section-heading text-2xl mb-3">About CHAP</h2>
                <div className="space-y-4 font-body text-gray-700 leading-relaxed text-sm">
                  <p>The College Housing Assistance Program (CHAP) is administered by the Indian Township Housing Authority to provide rental housing assistance to enrolled members of the Passamaquoddy Tribe at Indian Township who are attending an accredited college, university, or vocational/technical program and residing in off-campus housing.</p>
                  <p>The purpose of CHAP is to reduce the financial barriers that prevent tribal members from pursuing higher education by helping cover the cost of off-campus housing during the academic year. Assistance is paid directly to landlords on behalf of eligible students and is subject to available funding each semester.</p>
                </div>
              </div>

              {/* Posting Dates */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-300">
                <h2 className="font-heading font-bold text-forest-800 text-xl mb-1 flex items-center gap-2">
                  <Calendar className="w-5 h-5" aria-hidden="true" />Application Posting Dates &amp; Deadlines
                </h2>
                <p className="text-gray-600 font-body text-sm mb-4">Applications are accepted each semester. Submit early — funding is limited and awarded in order of receipt to eligible applicants.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body border-collapse">
                    <thead>
                      <tr className="bg-forest-800 text-white">
                        <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Semester</th>
                        <th className="text-left px-4 py-3 font-semibold">Application Deadline</th>
                        <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {postingDates.map((row, i) => (
                        <tr key={row.semester} className={i % 2 === 0 ? 'bg-cream-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-forest-800">{row.semester}</td>
                          <td className="px-4 py-3 text-earth-700 font-bold">{row.deadline}</td>
                          <td className="px-4 py-3 text-gray-600">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-yellow-700 font-body text-xs">Deadlines are subject to change. Contact the Housing Authority office to confirm current posting dates before applying.</p>
                </div>
              </div>

              {/* Preferences */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-300">
                <h2 className="font-heading font-bold text-forest-800 text-xl mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5" aria-hidden="true" />Selection Preferences
                </h2>
                <ol className="space-y-4" role="list">
                  {preferences.map((pref, i) => (
                    <li key={pref.label} className="flex items-start gap-3 bg-forest-50 rounded-lg p-4 border border-forest-100">
                      <div className="w-7 h-7 rounded-full bg-forest-800 text-white flex items-center justify-center font-bold text-xs flex-shrink-0" aria-hidden="true">{i + 1}</div>
                      <div>
                        <p className="font-heading font-bold text-forest-800 text-sm">{pref.label}</p>
                        <p className="text-gray-600 font-body text-xs leading-relaxed">{pref.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Required Docs */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-300">
                <h2 className="font-heading font-bold text-forest-800 text-xl mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" aria-hidden="true" />Required Documents
                </h2>
                <p className="text-gray-600 font-body text-sm mb-4">All of the following must be submitted with your CHAP application. Incomplete applications will not be processed.</p>
                <ul className="space-y-3" role="list">
                  {requiredDocs.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" aria-hidden="true" />{doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rules */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-300">
                <h2 className="font-heading font-bold text-forest-800 text-xl mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" aria-hidden="true" />Program Rules &amp; Important Information
                </h2>
                <ul className="space-y-4" role="list">
                  {rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-700 leading-relaxed border-b border-cream-200 pb-4 last:border-0 last:pb-0">
                      <span className="w-5 h-5 rounded-full bg-earth-100 border border-earth-300 text-earth-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5" aria-hidden="true">{i + 1}</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="bg-earth-700 rounded-xl p-6 text-white text-center shadow-md">
                <GraduationCap className="w-10 h-10 text-earth-300 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-xl mb-2">Ready to Apply?</h3>
                <p className="text-earth-200 font-body text-sm mb-5">Download the CHAP application, complete all sections, attach your documents, and submit to our office before the semester deadline.</p>
                <a href="/chap-application.pdf" download className="inline-flex items-center gap-2 bg-white text-earth-700 px-5 py-3 rounded-lg font-body font-semibold text-sm hover:bg-cream-200 transition-colors">
                  <Download className="w-4 h-4" aria-hidden="true" />Download CHAP Application (PDF)
                </a>
                <p className="text-earth-400 text-xs mt-3 font-body">Place real PDF at <code>/public/chap-application.pdf</code></p>
              </div>
            </div>


            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="card">
                <h2 className="font-heading font-bold text-forest-800 text-base mb-4 border-b border-cream-300 pb-3">Eligibility Requirements</h2>
                <ul className="space-y-3" role="list">
                  {eligibility.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-xs text-gray-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" aria-hidden="true" />{req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-heading font-bold text-red-800 text-sm mb-3">Not Eligible</h3>
                <ul className="space-y-2" role="list">
                  {notEligible.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-xs text-red-700">
                      <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card border-navy-200 bg-navy-50">
                <h3 className="font-heading font-bold text-navy-800 text-base mb-2">Questions?</h3>
                <p className="text-gray-600 font-body text-xs mb-3">Contact our office for help with your CHAP application.</p>
                <a href="tel:+12077963351" className="btn-navy text-xs px-3 py-2 inline-flex items-center gap-1">
                  <Phone className="w-3 h-3" aria-hidden="true" />(207) 796-3351
                </a>
                <div className="mt-2">
                  <Link href="/contact" className="text-navy-700 font-body text-xs hover:text-navy-900 inline-flex items-center gap-1">
                    Contact page <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
