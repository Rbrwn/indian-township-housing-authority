import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Calendar, ChevronRight, PenLine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Announcements',
  description: 'Latest news, announcements, and updates from the Indian Township Housing Authority.',
};

// ─────────────────────────────────────────────────────────────────────────
// HOW TO POST A NEW BLOG/ANNOUNCEMENT:
// 1. Add a new object to the top of this array (most recent first)
// 2. Fill in: id (unique), date, title, category, excerpt, and body
// 3. Save the file — Vercel will auto-deploy within ~60 seconds
// 4. No other changes needed!
//
// CATEGORIES: 'Announcement' | 'Program Update' | 'Community' | 'Maintenance' | 'CHAP' | 'General'
// ─────────────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  date: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];  // Each string = one paragraph
}

export const posts: BlogPost[] = [
  {
    id: 'chap-fall-2025-open',
    date: 'June 10, 2025',
    title: 'CHAP Applications Now Open for Fall 2025',
    category: 'CHAP',
    excerpt: 'The College Housing Assistance Program is now accepting applications for the Fall 2025 semester. The deadline is August 15th.',
    body: [
      'The Indian Township Housing Authority is pleased to announce that the College Housing Assistance Program (CHAP) is now accepting applications for the Fall 2025 semester.',
      'The application deadline is August 15, 2025. Enrolled tribal members attending an accredited college or university and living in off-campus housing are encouraged to apply.',
      'CHAP provides direct rental assistance paid to your landlord on your behalf. Funding is limited and awarded on a first-come, first-served basis to eligible applicants.',
      'To apply, download the CHAP application from our website or pick up a copy at the Housing Authority office. Make sure to submit all required documents before the deadline. Contact our office at (207) 796-8004 with any questions.',
    ],
  },
  {
    id: 'annual-inspections-2025',
    date: 'May 28, 2025',
    title: 'Annual Housing Inspections Scheduled for July 2025',
    category: 'Announcement',
    excerpt: 'Annual unit inspections will take place throughout July. All tenants will receive written notice at least 48 hours in advance.',
    body: [
      'The Indian Township Housing Authority will be conducting annual housing inspections throughout the month of July 2025.',
      'All current tenants will receive a written notice with their specific scheduled inspection date and time at least 48 hours before the inspection.',
      'Please ensure your unit is clean, accessible, and that all areas including smoke and carbon monoxide detectors are in working order prior to your inspection.',
      'If you have questions or need to reschedule, please contact our office as soon as possible at (207) 796-8004.',
    ],
  },
  {
    id: 'welcome-2025',
    date: 'January 6, 2025',
    title: 'Welcome to Our New Website',
    category: 'Announcement',
    excerpt: 'We are excited to launch our new website, making it easier for tribal members to access housing information, applications, and updates.',
    body: [
      'The Indian Township Housing Authority is pleased to launch our new website, designed to make it easier for Passamaquoddy tribal members to access housing information, download applications, and stay up to date with important announcements.',
      'On this site you can find information about our rental housing programs, download the housing application and CHAP application, view staff contact information, read tenant notices, and get in touch with our office.',
      'We will continue to update this site with news, program updates, and community announcements. If you have feedback or questions about the website, please contact our office.',
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

export default function BlogPage() {
  return (
    <>
      <PageHero title="News & Announcements" subtitle="The latest updates, program news, and community announcements from the Indian Township Housing Authority." breadcrumb="News & Announcements" />

      <section className="bg-cream-100 py-14 px-4">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">

              {/* How to post — visible only in dev, hidden in prod via comment */}
              <div className="bg-earth-50 border border-earth-200 rounded-xl p-5 flex items-start gap-3">
                <PenLine className="w-5 h-5 text-earth-700 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-heading font-bold text-earth-800 text-sm">How to add a new post</p>
                  <p className="text-earth-700 font-body text-xs mt-1">
                    Open <code className="bg-earth-100 px-1 rounded">app/blog/page.tsx</code> and add a new entry to the top of the <code className="bg-earth-100 px-1 rounded">posts</code> array. Fill in the date, title, category, excerpt, and body paragraphs. Save and push to GitHub — the site updates automatically within about 60 seconds.
                  </p>
                </div>
              </div>

              {posts.length === 0 ? (
                <div className="card text-center py-12">
                  <Calendar className="w-10 h-10 text-gray-300 mx-auto mb-3" aria-hidden="true" />
                  <p className="text-gray-500 font-body">No posts yet. Check back soon.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl border border-cream-300 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className={`text-xs font-body font-semibold px-2 py-0.5 rounded border ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1 text-gray-400">
                            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                            <time dateTime={post.date} className="text-xs font-body">{post.date}</time>
                          </div>
                        </div>
                        <h2 className="font-heading font-bold text-forest-800 text-xl mb-2">{post.title}</h2>
                        <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">{post.excerpt}</p>

                        {/* Full body */}
                        <div className="border-t border-cream-200 pt-4 space-y-3">
                          {post.body.map((para, i) => (
                            <p key={i} className="text-gray-700 font-body text-sm leading-relaxed">{para}</p>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="card">
                <h3 className="font-heading font-bold text-forest-800 text-base mb-4 border-b border-cream-300 pb-3">Categories</h3>
                <ul className="space-y-2" role="list">
                  {Array.from(new Set(posts.map(p => p.category))).map(cat => {
                    const count = posts.filter(p => p.category === cat).length;
                    return (
                      <li key={cat} className="flex items-center justify-between font-body text-sm text-gray-700">
                        <span className={`text-xs px-2 py-0.5 rounded border ${categoryColors[cat] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>{cat}</span>
                        <span className="text-gray-400 text-xs">{count} post{count !== 1 ? 's' : ''}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="card border-forest-200 bg-forest-50">
                <h3 className="font-heading font-bold text-forest-800 text-base mb-2">Stay Updated</h3>
                <p className="text-gray-600 font-body text-sm mb-4">Check this page regularly for program updates, inspection notices, and community news.</p>
                <Link href="/notices" className="btn-primary text-sm">View Tenant Notices <ChevronRight className="w-4 h-4" /></Link>
              </div>

              <div className="card">
                <h3 className="font-heading font-bold text-forest-800 text-base mb-3">Recent Posts</h3>
                <ul className="space-y-3" role="list">
                  {posts.slice(0, 5).map(post => (
                    <li key={post.id} className="border-b border-cream-200 pb-3 last:border-0 last:pb-0">
                      <p className="font-body font-semibold text-xs text-forest-800 leading-snug">{post.title}</p>
                      <p className="text-gray-400 font-body text-xs mt-0.5">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
