import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream-100 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-forest-800 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
          <span className="text-white font-heading font-bold text-3xl">404</span>
        </div>
        <h1 className="font-heading font-bold text-3xl text-forest-800 mb-3">Page Not Found</h1>
        <p className="text-gray-600 font-body text-base leading-relaxed mb-8">
          Sorry, we could not find the page you were looking for. It may have been moved or the address may be incorrect.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary"><Home className="w-4 h-4" aria-hidden="true" />Return Home</Link>
          <Link href="/contact" className="btn-secondary"><ArrowLeft className="w-4 h-4" aria-hidden="true" />Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
