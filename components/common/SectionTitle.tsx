import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  description?: string;
  href?: string;
  linkText?: string;
}

export function SectionTitle({ title, description, href, linkText = '더보기' }: SectionTitleProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        {description && (
          <p className="mt-2 text-muted-foreground">{description}</p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-primary font-medium hover:underline min-h-0 min-w-0 shrink-0"
        >
          {linkText}
          <ChevronRight className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
}
