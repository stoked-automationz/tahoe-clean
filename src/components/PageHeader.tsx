interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        <p className="text-primary-foreground/80 text-lg">{subtitle}</p>
      </div>
    </section>
  );
}