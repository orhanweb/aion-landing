// src/components/layout/site-footer.tsx
import { Container } from '@/components/ui/container';
import { getTranslations } from 'next-intl/server';

export async function SiteFooter() {
  const t = await getTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{t('copyright', { year })}</p>
        <p className="text-sm text-muted-foreground">{t('tagline')}</p>
      </Container>
    </footer>
  );
}
