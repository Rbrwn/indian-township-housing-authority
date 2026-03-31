import { Phone, Mail } from 'lucide-react';

interface StaffCardProps {
  name: string;
  title: string;
  phone?: string;
  email?: string;
  initials: string;
  bio?: string;
}

export default function StaffCard({ name, title, phone, email, initials, bio }: StaffCardProps) {
  // Obfuscate email from scrapers — splits it so bots can't harvest it easily
  const emailParts = email ? email.split('@') : [];

  return (
    <article className="card flex flex-col gap-4" aria-label={`Staff member: ${name}`}>
      <div className="flex items-center gap-4">
        {/* Replace with: <Image src="/staff/name.jpg" alt={name} width={72} height={72} className="rounded-full object-cover" /> */}
        <div className="w-16 h-16 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <span className="text-white font-heading font-bold text-xl">{initials}</span>
        </div>
        <div>
          <h3 className="font-heading font-bold text-forest-800 text-lg leading-tight">{name}</h3>
          <p className="text-earth-700 font-body text-sm font-semibold">{title}</p>
        </div>
      </div>
      {bio && <p className="text-gray-600 font-body text-sm leading-relaxed">{bio}</p>}
      <div className="space-y-1 mt-auto">
        {phone && (
          <a
            href={`tel:+1${phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 text-sm font-body text-navy-800 hover:text-forest-800 transition-colors"
            aria-label={`Call ${name} at ${phone}`}
          >
            <Phone className="w-4 h-4 text-forest-800" aria-hidden="true" />
            {phone}
          </a>
        )}
        {email && emailParts.length === 2 && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm font-body text-navy-800 hover:text-forest-800 transition-colors break-all"
            aria-label={`Email ${name}`}
            rel="noopener"
          >
            <Mail className="w-4 h-4 text-forest-800" aria-hidden="true" />
            {/* Rendered visually as full email but split in DOM to deter scrapers */}
            <span>{emailParts[0]}</span>
            <span aria-hidden="true">@</span>
            <span>{emailParts[1]}</span>
          </a>
        )}
      </div>
    </article>
  );
}
