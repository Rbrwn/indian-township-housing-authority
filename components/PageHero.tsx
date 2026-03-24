interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}
export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-forest-800 text-white py-12 px-4">
      <div className="container-main">
        {breadcrumb && (
          <p className="text-green-300 text-sm font-body mb-2" aria-label="Breadcrumb">
            Home &rsaquo; {breadcrumb}
          </p>
        )}
        <div className="accent-bar bg-earth-600" />
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">{title}</h1>
        {subtitle && (
          <p className="text-green-200 font-body text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
