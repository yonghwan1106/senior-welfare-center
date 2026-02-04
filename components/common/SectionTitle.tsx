import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  description?: string;
  href?: string;
  linkText?: string;
}

export function SectionTitle({
  title,
  description,
  href,
  linkText = '더보기',
}: SectionTitleProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12 opacity-0-initial animate-fade-in-up">
      <div>
        {/* 장식 요소 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-1 bg-primary rounded-full" />
          <span className="w-2 h-1 bg-warm rounded-full" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary/5 hover:bg-primary/10 text-primary font-semibold rounded-full transition-all min-h-0 min-w-0 shrink-0 border border-primary/20 hover:border-primary/40"
        >
          {linkText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}
