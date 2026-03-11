import { ShieldCheck, Award, Leaf } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Award,
  Leaf,
};

interface DifferentiatorCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function DifferentiatorCard({
  title,
  description,
  icon,
}: DifferentiatorCardProps) {
  const Icon = iconMap[icon] || ShieldCheck;

  return (
    <div className="group text-center p-6">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
        <Icon className="h-9 w-9 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}