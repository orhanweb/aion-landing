// src/lib/schema/breadcrumb.ts
import { breadcrumbEntityId } from '@/lib/schema/site-entity';

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function breadcrumbGraphNode(items: BreadcrumbItem[], pageUrl: string) {
  return {
    '@type': 'BreadcrumbList',
    '@id': breadcrumbEntityId(pageUrl),
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(isLast ? {} : { item: item.url })
      };
    })
  };
}

export function breadcrumbListJsonLd(items: BreadcrumbItem[], pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    ...breadcrumbGraphNode(items, pageUrl)
  };
}
