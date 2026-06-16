import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import NoticeCard, { Notice } from '@/components/NoticeCard';
import { Bell, Calendar, Phone, PenLine, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notices & News',
  description: 'Current tenant notices, announcements, and news from the Indian Township Housing Authority.',
};

// ─────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW NOTICE OR POST:
// 1. Add a new object to the TOP of the matching array below (most recent first)
// 2. For tenant notices: add to the `notices` array
// 3. For news/announcements: add to the `posts` array
// 4. Save the file — Vercel auto-deploys in ~60 seconds
// ─────────────────────────────────────────────────────────────────────────

// TENANT NOTICES — operational reminders, inspections, policy updates
export const notices: Notice[] = [
  
  {
    id: 'notice-2026-06-16',
    date: 'June 16th, 2026',
    title: 'Administrative Meeting',
    body: 'Discussion of Housing Buisness, finaces, etc., Held the 3rd Tuesday of every month @ 4:00PM @ The Housing Office.',
    type: 'meeting',
  },
  {
    id: 'notice-2026-06-16',
    date: 'June 16th, 2026',
    title: 'Monthly Meetings',
    body: 'A reminder that meetings are held the second Tuesday of each month @ 5:00 PM Held @ The Housing Office (Assigning Housing Units, Open to the public)',
    type: 'meeting',
  },

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
    body: 'Annual unit inspections will be conducted throughout July. You will receive written notice with your specific inspection date and time at least 48 hours in advance. Please ensure your unit is accessible on the scheduled date.',
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
    body: 'Please ensure your unit exterior, yard space, and assigned parking areas are clean and free of debris. Tenants are responsible for maintaining their immediate outdoor areas. Contact maintenance if you need assistance.',
    type: 'reminder',
  },
  {
    id: 'notice-2025-05-01',
    date: 'May 1, 2025',
    title: 'Smoke & Carbon Monoxide Detector Check',
    body: 'Maintenance staff will be checking smoke and carbon monoxide detectors in all units in May. Please test your detectors and notify the office immediately if any detector is not functioning. Do not remove or disable detectors.',
    type: 'alert',
  },
  {
    id: 'notice-2025-04-15',
    date: 'April 15, 2025',
    title: 'Updated Parking Policy',
    body: 'Unauthorized vehicles parked in designated tenant spaces or blocking access ways may be towed at the owner\'s expense. All vehicles must be in operational condition. Inoperable or unlicensed vehicles are subject to removal.',
    type: 'general',
  },
];

// NEWS & ANNOUNCEMENTS — programs, events, community news
export interface Post {
  id: string;
  date: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    id: 'chap-fall-2025-open',
    date: 'June 10, 2025',
    title: 'CHAP Applications Now Open for Fall 2025',
    category: 'CHAP',
    excerpt: 'The College Housing Assistance Program is now accepting applications for Fall 2025. The deadline is August 15th.',
    body: [
      'The Indian Township Housing Authority is pleased to announce that the College Housing Assistance Program (CHAP) is now accepting applications for the Fall 2025 semester.',
      'The application deadline is August 15, 2025. Enrolled tribal members attending an accredited college or university and living in off-campus housing are encouraged to apply early — funding is limited.',
      'CHAP provides direct rental assistance paid to your landlord on your behalf. Download the application on our CHAP page or pick up a copy at the office. Contact us at (207) 796-8004 with any questions.',
    ],
  },
  {
    id: 'welcome-website-2025',
    date: 'January 6, 2025',
    title: 'Welcome to Our New Website',
    category: 'Announcement',
    excerpt: 'We are excited to launch our new website, making it easier for tribal members to access housing information, applications, and updates.',
    body: [
      'The Indian Township Housing Authority is pleased to launch our new website, designed to make it easier for Passamaquoddy tribal members to access housing information, download applications, and stay up to date with important announcements.',
      'On this site you can find information about our rental housing programs, download the housing and CHAP applications, view staff contact information, and get in touch with our office directly.',
      'Thank you for your continued trust in the Indian Township Housing Authority. We look forward to serving you.',
    ],
  },
];

const categoryColors: Record<string, string> = {
  'Announcement':   'bg-forest-100 text-forest-800 border-forest-200',
  'Program Update': 'bg-navy-100 text-navy-800 border-navy-200',
  'Community':      'bg-earth-100 text-earth-800 border-earth-200',
  'Maintenance':    'bg-yellow-100 text-yellow-800 border-yellow-200',
  'CHAP':           'bg-purple-100 text-purple-800 border-purple-200',
  'General':        'bg-cream-200 text-gray-700 border-cream-300',
};

export default function UpdatesPage() {
  return (
    <>
      <PageHero
        title="Notices & News"
        subtitle="Tenant notices, program updates, and community announcements from the Indian Township Housing Authority."
        breadcrumb="Notices & News"
      />

      <section className="bg-cream-100 py-14 px-4">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              {/* ── HOW TO POST TIP ── */}
              <div className="bg-earth-50 border border-earth-200 rounded-xl p-4 flex items-start gap-3">
                <PenLine className="w-5 h-5 text-earth-700 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-earth-700 font-body text-xs leading-relaxed">
                  <strong>To add a notice or announcement:</strong> Open{' '}
                  <code className="bg-earth-100 px-1 rounded">app/updates/page.tsx</code>, add a new entry to the top of the{' '}
                  <code className="bg-earth-100 px-1 rounded">notices</code> or{' '}
                  <code className="bg-earth-100 px-1 rounded">posts</code> array, save, and push to GitHub — live in ~60 seconds.
                </p>
              </div>

              {/* ── TENANT NOTICES ── */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="font-heading font-bold text-forest-800 text-2xl">Tenant Notices</h2>
                </div>
                <ol className="space-y-4" role="list" aria-label="Tenant notices">
                  {notices.map((notice) => (
                    <li key={notice.id}><NoticeCard notice={notice} /></li>
                  ))}
                </ol>
              </div>

              {/* ── NEWS & ANNOUNCEMENTS ── */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-earth-700 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="font-heading font-bold text-forest-800 text-2xl">News & Announcements</h2>
                </div>
                <div className="space-y-6">
                  {posts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl border border-cream-300 shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className={`text-xs font-body font-semibold px-2 py-0.5 rounded border ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-gray-400">
                          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                          <time dateTime={post.date} className="text-xs font-body">{post.date}</time>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-forest-800 text-xl mb-2">{post.title}</h3>
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="border-t border-cream-200 pt-4 space-y-3">
                        {post.body.map((para, i) => (
                          <p key={i} className="text-gray-700 font-body text-sm leading-relaxed">{para}</p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* ── SIDEBAR ── */}
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
                <a href="tel:+12077968004" className="btn-primary text-sm">
                  <Phone className="w-4 h-4" aria-hidden="true" />(207) 796-8004
                </a>
                <div className="mt-3">
                  <Link href="/contact" className="text-forest-700 font-body text-sm hover:text-forest-900 underline">
                    Contact page →
                  </Link>
                </div>
              </div>

              <div className="card">
                <h3 className="font-heading font-bold text-forest-800 text-base mb-3">Quick Links</h3>
                <ul className="space-y-2" role="list">
                  {[
                    { href:'/apply', label:'Apply for Housing' },
                    { href:'/chap', label:'CHAP Program' },
                    { href:'/policies', label:'Policies & Forms' },
                    { href:'/contact', label:'Contact Us' },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-forest-700 font-body text-sm hover:text-forest-900 inline-flex items-center gap-1">
                        <ChevronRight className="w-3 h-3" aria-hidden="true" />{l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3 className="font-heading font-bold text-forest-800 text-base mb-3">Office Hours</h3>
                <p className="text-gray-700 font-body text-sm"><strong>Monday – Friday</strong><br />7:30 AM – 4:00 PM</p>
                <p className="text-gray-500 font-body text-xs mt-1">Closed on federal and tribal holidays</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
