import Link from 'next/link';
import { Heart, GraduationCap, Award, Briefcase, MessageCircle } from 'lucide-react';
import { quickMenu } from '@/data/navigation';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  GraduationCap,
  Award,
  Briefcase,
  MessageCircle,
};

export function QuickMenu() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {quickMenu.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center justify-center p-6 md:p-8 bg-card border rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-200"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-200">
                  {Icon && (
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-1 hidden sm:block">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
