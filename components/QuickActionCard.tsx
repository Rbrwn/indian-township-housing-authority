import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'green' | 'brown' | 'navy';
}

const variantStyles = {
  green: { card: 'border-forest-200 hover:border-forest-400', icon: 'bg-forest-800 text-white', title: 'text-forest-800', link: 'text-forest-700 group-hover:text-forest-900' },
  brown: { card: 'border-earth-200 hover:border-earth-400',   icon: 'bg-earth-700 text-white',  title: 'text-earth-700',  link: 'text-earth-600 group-hover:text-earth-900' },
  navy:  { card: 'border-navy-200 hover:border-navy-400',     icon: 'bg-navy-800 text-white',   title: 'text-navy-800',   link: 'text-navy-700 group-hover:text-navy-900' },
};

export default function QuickActionCard({ href, icon: Icon, title, description, variant = 'green' }: QuickActionCardProps) {
  const styles = variantStyles[variant];
  return (
    <Link href={href}
      className={`group block bg-white rounded-xl border-2 ${styles.card} p-6 shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2`}
      aria-label={title}>
      <div className={`w-12 h-12 rounded-lg ${styles.icon} flex items-center justify-center mb-4`} aria-hidden="true">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className={`font-heading font-bold text-lg mb-2 ${styles.title}`}>{title}</h3>
      <p className="text-gray-600 font-body text-sm leading-relaxed mb-3">{description}</p>
      <span className={`text-sm font-body font-semibold ${styles.link} inline-flex items-center gap-1`}>Learn more →</span>
    </Link>
  );
}
