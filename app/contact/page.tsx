'use client';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())    e.name    = 'Name is required.';
    if (!form.email.trim())   e.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
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
      console.log('Contact form submission:', form);
      await new Promise(res => setTimeout(res, 1200));
      // To use Formspree: uncomment below and set your form ID
      // const r = await fetch('https://formspree.io/f/YOUR_FORM_ID', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) });
      // if (!r.ok) throw new Error('failed');
      setStatus('success');
      setForm({ name:'', email:'', phone:'', subject:'', message:'' });
    } catch { setStatus('error'); }
  };

  const inputCls = (f: keyof typeof form) =>
    `w-full border rounded-lg px-4 py-2.5 font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition-colors ${errors[f] ? 'border-red-400 bg-red-50' : 'border-cream-300 bg-white hover:border-forest-400'}`;

  return (
    <>
      <PageHero title="Contact Us" subtitle="We are here to help. Reach our office by phone, fax, or use the form below." breadcrumb="Contact" />
      <section className="bg-cream-100 py-14 px-4">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              <div><div className="accent-bar" /><h2 className="section-heading">Get in Touch</h2>
                <p className="text-gray-600 font-body leading-relaxed">Our office is open Monday through Friday. Whether you have a question about housing, an application, or need assistance, we are happy to hear from you.</p>
              </div>
              <address className="not-italic space-y-4">
                {[
                  { icon: MapPin,  bg:'bg-forest-800', label:'Our Office', lines:['Mailing: PO Box 301, Princeton, ME 04668','Physical: 7 Birch Point Road, Princeton, ME 04668'] },
                  { icon: Phone,   bg:'bg-forest-800', label:'Phone',      lines:['Main: (207) 796-3351','Alternate: (207) 796-3301'] },
                  { icon: Clock,   bg:'bg-navy-800',   label:'Hours',      lines:['Monday – Friday: 8:00 AM – 4:00 PM','Closed on federal and tribal holidays'] },
                ].map(({ icon: Icon, bg, label, lines }) => (
                  <div key={label} className="card flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`} aria-hidden="true"><Icon className="w-5 h-5 text-white" /></div>
                    <div>
                      <h3 className="font-heading font-bold text-forest-800 text-sm mb-1">{label}</h3>
                      {lines.map((l, i) => <p key={i} className="font-body text-sm text-gray-700">{l}</p>)}
                    </div>
                  </div>
                ))}
                <div className="card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-earth-700 flex items-center justify-center flex-shrink-0 font-bold text-white text-xs" aria-hidden="true">FAX</div>
                  <div><h3 className="font-heading font-bold text-forest-800 text-sm mb-1">Fax</h3><p className="font-body text-sm text-gray-700">(207) 796-5357</p></div>
                </div>
              </address>
              {/* Map placeholder — replace div below with a real Google Maps iframe */}
              <div className="rounded-xl overflow-hidden border border-cream-300 shadow-sm bg-forest-50 h-48 flex flex-col items-center justify-center text-center p-4" role="img" aria-label="Map placeholder">
                <MapPin className="w-8 h-8 text-forest-400 mb-2" aria-hidden="true" />
                <p className="text-forest-700 font-body text-sm font-semibold">Indian Township, Princeton, ME</p>
                <a href="https://maps.google.com/?q=7+Birch+Point+Road+Princeton+ME+04668" target="_blank" rel="noopener noreferrer" className="mt-2 text-xs font-body text-navy-700 underline hover:text-navy-900">Open in Google Maps ↗</a>
                <p className="text-gray-400 font-body text-xs mt-1">📍 Replace with Google Maps embed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="font-heading font-bold text-forest-800 text-xl mb-1">Send a Message</h2>
              <p className="text-gray-600 font-body text-sm mb-5">Fill out the form below and we will get back to you as soon as possible.</p>
              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-5 flex items-start gap-3" role="alert">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div><p className="font-body font-semibold text-green-800 text-sm">Message sent successfully!</p><p className="font-body text-green-700 text-xs mt-0.5">Thank you — we will respond as soon as possible.</p></div>
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-5 flex items-start gap-3" role="alert">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="font-body text-red-700 text-sm">Something went wrong. Please try again or call us at (207) 796-3351.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="space-y-4">
                  {[
                    { id:'name',    label:'Full Name',      type:'text',  required:true,  auto:'name' },
                    { id:'email',   label:'Email Address',  type:'email', required:true,  auto:'email' },
                    { id:'phone',   label:'Phone Number',   type:'tel',   required:false, auto:'tel' },
                  ].map(({ id, label, type, required, auto }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block font-body font-semibold text-sm text-gray-700 mb-1">
                        {label} {required && <span aria-hidden="true" className="text-red-500">*</span>}
                        {!required && <span className="text-gray-400 font-normal"> (optional)</span>}
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
                  <p className="text-gray-400 font-body text-xs"><span aria-hidden="true" className="text-red-500">*</span> Required. Do not submit sensitive personal information via this form.</p>
                  <button type="submit" disabled={status==='submitting'} className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'submitting'
                      ? <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending…</>
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
