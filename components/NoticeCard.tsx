import { Calendar, Info, AlertTriangle, CheckCircle, Bell } from 'lucide-react';

export type NoticeType = 'info' | 'reminder' | 'alert' | 'meeting' | 'general';

export interface Notice {
  id: string;
  date: string;
  title: string;
  body: string;
  type: NoticeType;
}

const typeConfig: Record<NoticeType, { icon: React.ElementType; bg: string; border: string; iconColor: string; label: string }> = {
  info:    { icon: Info,          bg: 'bg-blue-50',     border: 'border-blue-200',    iconColor: 'text-blue-600',    label: 'Information' },
  reminder:{ icon: Bell,          bg: 'bg-yellow-50',   border: 'border-yellow-200',  iconColor: 'text-yellow-600',  label: 'Reminder' },
  alert:   { icon: AlertTriangle, bg: 'bg-red-50',      border: 'border-red-200',     iconColor: 'text-red-600',     label: 'Alert' },
  meeting: { icon: Calendar,      bg: 'bg-green-50',    border: 'border-green-200',   iconColor: 'text-forest-800',  label: 'Meeting' },
  general: { icon: CheckCircle,   bg: 'bg-cream-100',   border: 'border-cream-300',   iconColor: 'text-earth-700',   label: 'Notice' },
};

export default function NoticeCard({ notice }: { notice: Notice }) {
  const cfg = typeConfig[notice.type];
  const Icon = cfg.icon;
  return (
    <article className={`rounded-xl border-l-4 ${cfg.border} ${cfg.bg} p-5 shadow-sm`} aria-label={`Notice: ${notice.title}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${cfg.iconColor}`} aria-hidden="true" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className={`text-xs font-body font-semibold uppercase tracking-wide ${cfg.iconColor}`}>{cfg.label}</span>
            <span className="text-xs text-gray-400 font-body">·</span>
            <time dateTime={notice.date} className="text-xs text-gray-500 font-body">{notice.date}</time>
          </div>
          <h3 className="font-heading font-bold text-forest-800 text-base mb-1">{notice.title}</h3>
          <p className="text-gray-700 font-body text-sm leading-relaxed">{notice.body}</p>
        </div>
      </div>
    </article>
  );
}
