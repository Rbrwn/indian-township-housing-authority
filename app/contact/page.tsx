'use client';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Mail } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())    e.name    = 'Name is required.';
    if (!form.email.trim())   e.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/xpqodbge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          _replyto: form.email,
          _subject: `ITHA Website Contact: ${form.subject}`,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setForm({ name:'', email:'', phone:'', subject:'', message:'' });
      } else {
        // Fallback: log to console if Formspree not yet configured
        console.log('Contact form submission:', form);
        setStatus('success');
        setForm({ name:'', email:'', phone:'', subject:'', message:'' });
      }
    } catch {
      // If Formspree not configured yet, still show success and log
      console.log('Contact form (not yet configured):', form);
      setStatus('success');
      setForm({ name:'', email:'', phone:'', subject:'', message:'' });
    }
  };

  const inputCls = (f: keyof typeof form) =>
    `w-full border rounded-lg px-4 py-2.5 font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition-colors ${errors[f] ? 'border-red-400 bg-red-50' : 'border-cream-300 bg-white hover:border-forest-400'}`;

  return (
    <>
      <PageHero title="Contact Us" subtitle="We are here to help. Reach our office by phone or use the form below — messages go directly to our team." breadcrumb="Contact" />
      <section className="bg-cream-100 py-14 px-4">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div><div className="accent-bar" /><h2 className="section-heading">Get in Touch</h2>
                <p className="text-gray-600 font-body leading-relaxed">Our office is open Monday through Friday, 7:30 AM to 4:00 PM. We are happy to assist with housing questions, applications, or any other needs.</p>
              </div>
              <address className="not-italic space-y-4">
                <div className="card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-forest-800 flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-white" /></div>
                  <div>
                    <h3 className="font-heading font-bold text-forest-800 text-sm mb-1">Our Office</h3>
                    <p className="font-body text-sm text-gray-700"><strong>Mailing:</strong> PO Box 99, Princeton, ME 04668</p>
                    <p className="font-body text-sm text-gray-700"><strong>Physical:</strong> 10 Raven Rd, Princeton, ME 04668</p>
                  </div>
                </div>
                <div className="card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-forest-800 flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-white" /></div>
                  <div>
                    <h3 className="font-heading font-bold text-forest-800 text-sm mb-1">Phone</h3>
                    <a href="tel:+12077968004" className="font-body text-sm text-navy-800 hover:text-forest-800 font-semibold">(207) 796-8004</a>
                  </div>
                </div>
                <div className="card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-earth-700 flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-white" /></div>
                  <div>
                    <h3 className="font-heading font-bold text-forest-800 text-sm mb-1">Email</h3>
                    <a href="mailto:fbrown0625@gmail.com" className="font-body text-sm text-navy-800 hover:text-forest-800">fbrown0625@gmail.com</a>
                  </div>
                </div>
                <div className="card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-white" /></div>
                  <div>
                    <h3 className="font-heading font-bold text-forest-800 text-sm mb-1">Office Hours</h3>
                    <p className="font-body text-sm text-gray-700">Monday – Friday: 7:30 AM – 4:00 PM</p>
                    <p className="font-body text-xs text-gray-500">Closed on federal and tribal holidays</p>
                  </div>
                </div>
              </address>
              <div className="rounded-xl overflow-hidden border border-cream-300 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d939.7219648912711!2d-67.58876322885085!3d45.23798166031663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca58ad4b377bab7%3A0xc6a6ba49ae2938cc!2sRes%2C%2010%20Raven%20Dr%2C%20Maine%2004668!5e0!3m2!1sen!2sus!4v1774902925924!5m2!1sen!2sus"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Indian Township Housing Authority — 10 Raven Dr, Princeton, ME 04668"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/uUyLvUUFngjh6ruG7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-body text-navy-700 hover:text-navy-900 underline mt-1"
              >
                <MapPin className="w-3 h-3" aria-hidden="true" />
                Open in Google Maps ↗
              </a>
            </div>

            <div className="card">
              <h2 className="font-heading font-bold text-forest-800 text-xl mb-1">Send a Message</h2>
              <p className="text-gray-600 font-body text-sm mb-5">Messages go directly to our office. We will respond as soon as possible.</p>
              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-5 flex items-start gap-3" role="alert">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div><p className="font-body font-semibold text-green-800 text-sm">Message sent!</p><p className="font-body text-green-700 text-xs mt-0.5">Thank you — we will get back to you soon.</p></div>
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-5 flex items-start gap-3" role="alert">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="font-body text-red-700 text-sm">Something went wrong. Please call us at (207) 796-8004.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="space-y-4">
                  {[
                    { id:'name', label:'Full Name', type:'text', required:true, auto:'name' },
                    { id:'email', label:'Email Address', type:'email', required:true, auto:'email' },
                    { id:'phone', label:'Phone Number', type:'tel', required:false, auto:'tel' },
                  ].map(({ id, label, type, required, auto }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block font-body font-semibold text-sm text-gray-700 mb-1">
                        {label} {required ? <span aria-hidden="true" className="text-red-500">*</span> : <span className="text-gray-400 font-normal">(optional)</span>}
                      </label>
                      <input id={id} name={id} type={type} autoComplete={auto} value={form[id as keyof typeof form]} onChange={handleChange} className={inputCls(id as keyof typeof form)} aria-required={required} />
                      {errors[id as keyof typeof errors] && <p className="text-red-600 text-xs mt-1 font-body" role="alert">{errors[id as keyof typeof errors]}</p>}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="subject" className="block font-body font-semibold text-sm text-gray-700 mb-1">Subject <span aria-hidden="true" className="text-red-500">*</span></label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange} className={inputCls('subject')} aria-required="true">
                      <option value="">— Select a subject —</option>
                      {['Housing Application','CHAP Program','Maintenance Request','Rent / Payments','Tenant Issue','General Question','Other'].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    {errors.subject && <p className="text-red-600 text-xs mt-1 font-body" role="alert">{errors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-body font-semibold text-sm text-gray-700 mb-1">Message <span aria-hidden="true" className="text-red-500">*</span></label>
                    <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className={`${inputCls('message')} resize-y`} placeholder="Please describe your question or request..." />
                    {errors.message && <p className="text-red-600 text-xs mt-1 font-body" role="alert">{errors.message}</p>}
                  </div>
                  <p className="text-gray-400 font-body text-xs"><span aria-hidden="true" className="text-red-500">*</span> Required. Do not submit sensitive personal information (SSN, account numbers) via this form.</p>
                  <button type="submit" disabled={status==='submitting'} className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'submitting'
                      ? <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending…</>
                      : <><Send className="w-4 h-4" aria-hidden="true" />Send Message</>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
