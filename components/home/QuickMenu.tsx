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

const colorMap: Record<string, { bg: string; icon: string; hover: string }> = {
  Heart: {
    bg: 'bg-warm/10',
    icon: 'text-warm',
    hover: 'group-hover:bg-warm group-hover:shadow-[0_0_30px_rgba(var(--warm)/0.3)]',
  },
  GraduationCap: {
    bg: 'bg-primary/10',
    icon: 'text-primary',
    hover: 'group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(var(--primary)/0.3)]',
  },
  Award: {
    bg: 'bg-earth/10',
    icon: 'text-earth',
    hover: 'group-hover:bg-earth group-hover:shadow-[0_0_30px_rgba(var(--earth)/0.3)]',
  },
  Briefcase: {
    bg: 'bg-primary/10',
    icon: 'text-primary',
    hover: 'group-hover:bg-primary',
  },
  MessageCircle: {
    bg: 'bg-warm/10',
    icon: 'text-warm',
    hover: 'group-hover:bg-warm',
  },
};

export function QuickMenu() {
  return (
    <section className="py-16 md:py-20 bg-background relative">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pattern-traditional opacity-30" />

      <div className="container mx-auto px-4 relative">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-12 opacity-0-initial animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            빠른 메뉴
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            원하시는 서비스를 선택하세요
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {quickMenu.map((item, index) => {
            const Icon = iconMap[item.icon];
            const colors = colorMap[item.icon] || colorMap.Heart;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-border/50 rounded-3xl card-hover opacity-0-initial animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 호버 시 배경 그라데이션 */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 아이콘 */}
                <div
                  className={`relative w-16 h-16 md:w-20 md:h-20 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${colors.hover}`}
                >
                  {Icon && (
                    <Icon
                      className={`w-8 h-8 md:w-10 md:h-10 ${colors.icon} group-hover:text-white transition-colors duration-300`}
                    />
                  )}
                </div>

                {/* 텍스트 */}
                <h3 className="text-lg md:text-xl font-bold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-2 hidden sm:block leading-relaxed">
                  {item.description}
                </p>

                {/* 하단 장식선 */}
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500 rounded-full" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
