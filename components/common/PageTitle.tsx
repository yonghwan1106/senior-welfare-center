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
    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b">
      <div className="container mx-auto px-4 py-12">
        {/* 브레드크럼 */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-base text-muted-foreground mb-4" aria-label="현재 위치">
            <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors min-h-0 min-w-0">
              <Home className="w-5 h-5" />
              <span className="sr-only">홈</span>
            </Link>
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* 타이틀 */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
        {description && (
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}
