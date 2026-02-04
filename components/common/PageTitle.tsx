import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageTitleProps {
  title: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
}

export function PageTitle({ title, description, breadcrumb }: PageTitleProps) {
  return (
    <div className="relative overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0 gradient-warm" />
      <div className="absolute inset-0 pattern-traditional opacity-40" />

      {/* 장식 요소 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-warm/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 py-14 md:py-20 relative">
        {/* 브레드크럼 */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            className="flex items-center gap-2 text-base text-muted-foreground mb-6 opacity-0-initial animate-fade-in"
            aria-label="현재 위치"
          >
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-primary transition-colors min-h-0 min-w-0 p-1 -m-1"
            >
              <Home className="w-5 h-5" />
              <span className="sr-only">홈</span>
            </Link>
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-border" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* 타이틀 */}
        <div className="opacity-0-initial animate-fade-in-up delay-100">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* 하단 장식선 */}
        <div className="mt-8 flex items-center gap-3 opacity-0-initial animate-fade-in delay-200">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-3 h-1 bg-warm rounded-full" />
          <div className="w-2 h-1 bg-earth rounded-full" />
        </div>
      </div>
    </div>
  );
}
