import {
  House,
  Wrench,
  CalendarDays,
  Leaf,
  Sparkles,
  HardHat,
  Snowflake,
  Building2,
  PackageOpen,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  House,
  Wrench,
  CalendarDays,
  Leaf,
  Sparkles,
  HardHat,
  Snowflake,
  Building2,
  PackageOpen,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] || House;

  return (
    <div className="group bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
        <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}