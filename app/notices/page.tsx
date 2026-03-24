import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import NoticeCard, { Notice } from '@/components/NoticeCard';
import { Bell, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tenant Notices',
  description: 'Current tenant notices, announcements, and reminders from the Indian Township Housing Authority.',
};

// ── EDIT THIS ARRAY TO UPDATE NOTICES — no other changes needed ──
export const notices: Notice[] = [
  {
    id: 'notice-2025-07-01',
    date: 'July 1, 2025',
    title: 'July Rent Due',
    body: 'A reminder that rent for July is due on July 1st. Please submit your payment to the Housing Authority office by the due date. If you are experiencing a hardship, please contact our office as soon as possible to discuss payment arrangements.',
    type: 'reminder',
  },
  {
    id: 'notice-2025-06-15',
    date: 'June 15, 2025',
    title: 'Annual Housing Inspections — Scheduled for July',
    body: 'Annual unit inspections will be conducted throughout the month of July. You will receive written notice with your specific inspection date and time at least 48 hours in advance. Please ensure your unit is accessible on the scheduled date.',
    type: 'info',
  },
  {
    id: 'notice-2025-06-10',
    date: 'June 10, 2025',
    title: 'CHAP Applications Open — Fall 2025',
    body: 'The College Housing Assistance Program (CHAP) is now accepting applications for Fall 2025. The application deadline is June 1st. Enrolled tribal members attending college in off-campus housing are encouraged to apply. Visit our CHAP page or contact the office for more information.',
    type: 'info',
  },
  {
    id: 'notice-2025-06-05',
    date: 'June 5, 2025',
    title: 'Housing Authority Board Meeting — June 20, 2025',
    body: 'The Indian Township Housing Authority will hold a regular board meeting on Friday, June 20, 2025 at 10:00 AM at the Tribal Community Center. Tribal members are welcome to attend. Contact the office for the agenda.',
    type: 'meeting',
  },
  {
    id: 'notice-2025-05-20',
    date: 'May 20, 2025',
    title: 'Spring Maintenance Reminder — Exterior Cleanup',
    body: 'As we enter the warmer months, please ensure your unit exterior, yard space, and any assigned parking areas are clean and free of debris. Tenants are responsible for maintaining their immediate outdoor areas.',
    type: 'reminder',
  },
  {
    id: 'notice-2025-05-01',
    date: 'May 1, 2025',
    title: 'Smoke & Carbon Monoxide Detector Check',
    body: 'All housing units are required to have functioning smoke detectors and carbon monoxide detectors. Maintenance staff will be checking all units in May. Please test your detectors and notify the office immediately if any detector is not functioning.',
    type: 'alert',
  },
  {
    id: 'notice-2025-04-15',
    date: 'April 15, 2025',
    title: 'Updated Parking Policy',
    body: 'Unauthorized vehicles parked in designated tenant spaces or blocking access ways may be towed at the owner\'s expense. All vehicles must be in operational condition. Inoperable or unlicensed vehicles on Housing Authority property are subject to removal.',
    type: 'general',
  },
  {
    id: 'notice-2025-04-01',
    date: 'April 1, 2025',
    title: 'Office Reminder — Maintenance Request Process',
    body: 'For all non-emergency maintenance requests, please contact the Housing Authority office during business hours at (207) 796-3301. All requests should be reported to the office — do not contact maintenance staff directly. Emergency issues should be reported immediately.',
    type: 'info',
  },
];

export default function NoticesPage() {
  return (
    <>
      <PageHero title="Tenant Notices" subtitle="Current announcements, reminders, and updates for Indian Township Housing Authority residents." breadcrumb="Notices" />
      <section className="bg-cream-100 py-14 px-4">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-forest-800" aria-hidden="true" />
                <h2 className="font-heading font-bold text-forest-800 text-2xl">Current Notices</h2>
              </div>
              {notices.length === 0 ? (
                <div className="card text-center py-12">
                  <Bell className="w-10 h-10 text-gray-300 mx-auto mb-3" aria-hidden="true" />
                  <p className="text-gray-500 font-body">No notices at this time. Check back soon.</p>
                </div>
              ) : (
                <ol className="space-y-4" role="list" aria-label="Tenant notices">
                  {notices.map((notice) => (
                    <li key={notice.id}><NoticeCard notice={notice} /></li>
                  ))}
                </ol>
              )}
            </div>
            <aside className="space-y-6">
              <div className="card">
                <h3 className="font-heading font-bold text-forest-800 text-base mb-4 border-b border-cream-300 pb-3">Notice Types</h3>
                <ul className="space-y-3 font-body text-sm" role="list">
                  {[
                    { type:'Reminder',    color:'bg-yellow-400', desc:'Rent due dates and recurring reminders' },
                    { type:'Information', color:'bg-blue-400',   desc:'Program updates and general info' },
                    { type:'Alert',       color:'bg-red-400',    desc:'Important safety or policy notices' },
                    { type:'Meeting',     color:'bg-green-500',  desc:'Board meetings and community events' },
                    { type:'Notice',      color:'bg-yellow-600', desc:'General housing authority notices' },
                  ].map((item) => (
                    <li key={item.type} className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} aria-hidden="true" />
                      <div><span className="font-semibold text-gray-700">{item.type}: </span><span className="text-gray-500 text-xs">{item.desc}</span></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card border-forest-200 bg-forest-50">
                <h3 className="font-heading font-bold text-forest-800 text-base mb-2">Questions?</h3>
                <p className="text-gray-600 font-body text-sm mb-4">Contact our office with any questions about notices or your housing situation.</p>
                <a href="tel:+12077963351" className="btn-primary text-sm"><Phone className="w-4 h-4" aria-hidden="true" />(207) 796-3351</a>
                <div className="mt-3"><Link href="/contact" className="text-forest-700 font-body text-sm hover:text-forest-900 underline">Contact page →</Link></div>
              </div>
              <div className="card">
                <h3 className="font-heading font-bold text-forest-800 text-base mb-3">Office Hours</h3>
                <p className="text-gray-700 font-body text-sm"><strong>Monday – Friday</strong><br />8:00 AM – 4:00 PM</p>
                <p className="text-gray-500 font-body text-xs mt-1">Closed on federal and tribal holidays</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
