// src/components/sections/cta-section.tsx
import { Link } from '@/i18n/navigation';
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { getTranslations } from 'next-intl/server';

export async function CtaSection() {
  const t = await getTranslations('cta');

  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/20 via-card to-background p-8 sm:p-12">
          <Badge variant="accent">{t('eyebrow')}</Badge>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t('description')}</p>
          <Link href="/degerlendirme" className={cn(buttonVariants({ size: 'lg' }), 'mt-8 inline-flex')}>
            {t('button')}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
